import { useEffect, useMemo, useState } from "react";
import User from "../../components/User/User";
import Winners from "../../components/Winners/Winners";
import { useDebounce } from "../../hooks/useDebounce";
import { client } from "../../utils/api-client";

import RandomIcon from "../../assets/img/refresh-line.svg";
import useQuery from "../../hooks/useQuery";
import { REQUIRED_RANDOM_TIME, USERS_LIMIT } from "../../consts";

const Users = () => {
  const query = useQuery();
  const eventId = query.get("eventId");
  const [wonUsers, setWonUsers] = useState(null);
  const [isRandomizing, setRandomizing] = useState(false);

  const [contests, setContests] = useState([]);

  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState("");
  const [users, setUsers] = useState([]);
  const [activeContest, setActiveContest] = useState(eventId ? eventId : "0");
  const debouncedContest = useDebounce(activeContest, 250);

  const [pageLoading, setPageLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [noMore, setNoMore] = useState(false);

  useEffect(() => {
    client(`contests`, {
      token: localStorage.getItem("token")
    })
      .then((data) => {
        setContests(data.data);
      });
  }, []);

  useEffect(() => {
    if (activeContest === "0") {
      client(`users?limit=${USERS_LIMIT}&page=${activePage}`, {
        token: localStorage.getItem("token")
      })
        .then((data) => {
          setPageLoading(false);
          setUsers((users) => [...data.data, ...users]);
          if (data.data.length < USERS_LIMIT) {
            setNoMore(true);
          }
        })
        .catch((error) => {
          setPageLoading(false);
          setUsersError(error.message);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  useEffect(() => {
    if (debouncedContest !== "0") {
      setUsersError("");
      client(`users/contest/${debouncedContest}?limit=${USERS_LIMIT}&page=${activePage}`, {
        token: localStorage.getItem("token")
      })
        .then((data) => {
          setUsersLoading(false);
          setUsers((users) => [...data.data, ...users]);
          setUsersError("");
          setPageLoading(false);
          if (data.data.length < USERS_LIMIT) {
            setNoMore(true);
          } else {
            setNoMore(false);
          }
        })
        .catch((error) => {
          setUsersError(error.message);
          setUsersLoading(false);
          setPageLoading(false);
        });
    }
  }, [debouncedContest, activePage]);

  useEffect(() => {
    if (debouncedContest !== "0") {
      setUsersLoading(true);
    }
  }, [debouncedContest]);

  const handleRandomizeSubmit = (evt) => {
    evt.preventDefault();
    const startTime = new Date().getTime();

    if (activeContest !== "0") {
      setRandomizing(true);
      client(`winners/${activeContest}`, {
        token: localStorage.getItem("token")
      })
        .then((data) => {
          const endTime = new Date().getTime();
          const randomizingDuration = endTime - startTime;
          const timoutDuration = REQUIRED_RANDOM_TIME - randomizingDuration;
          if (randomizingDuration >= REQUIRED_RANDOM_TIME) {
            setRandomizing(false);
            setWonUsers(data.data);
          } else {
            setTimeout(() => {
              setRandomizing(false);
              setWonUsers(data.data);
            }, timoutDuration);
          }
        })
        .catch(() => {
          setRandomizing(false);
        });
    }
  };

  const handleContestChange = (evt) => {
    setActivePage(1);
    setUsers([]);
    setActiveContest(evt.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activeContestType = useMemo(() => contests && contests.find(contest => activeContest === contest.id), [activeContest, contests]);

  const handleMoreClick = () => {
    setPageLoading(true);
    setActivePage(activePage + 1);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleRandomizeSubmit} className="choose-winner">
          <div className="choose-winner__block choose-winner__event">
            <label className="choose-winner__title">Tadbir</label>
            <select className="field choose-winner__select" defaultValue={activeContest} onChange={handleContestChange}>
              <option value="0" disabled>Tadbirni tanlang</option>
              {contests.map((contest) => (
                <option key={contest.id} value={contest.id}>{contest.title}</option>
              ))}
            </select>
          </div>
          <div className="choose-winner__block choose-winner__winner">
            <h2 className="choose-winner__title">G’oliblarni aniqlash</h2>
            <div className="choose-winner__right-content">
              <output className="choose-winner__input field">{activeContestType && activeContestType.winnerCount}</output>
              <button disabled={isRandomizing} className="submit-btn" type="submit">
                <span>
                  <img className={isRandomizing ? "choose-winner__refresh-icon" : ""} src={RandomIcon} alt="" />
                  {isRandomizing ? "Randomlanyapti" : "Randomlash"}
                </span>
              </button>
            </div>
          </div>
        </form>

        <div className="users">
          {usersLoading && <p style={{fontStyle: "italic"}}>Userlar kelyapti...</p>}
          {usersError && <p>{usersError}</p>}
          {(!usersLoading && users.length) ? <table className="users__table">
            <caption className="users__title">Ro’yxatdan o’tganlar ({users.length})</caption>
            <thead className="users__header">
              <tr className="users__row">
                <th className="users__col users__header-col">Ism va familiya</th>
                <th className="users__col users__header-col">Telefon raqam</th>
                <th className="users__col users__header-col">Yosh</th>
                <th className="users__col users__header-col">Jinsi</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map(user => <User key={user.id} data={user}/>)}
            </tbody>
          </table> : null}
        </div>
        {!noMore && <button disabled={pageLoading} onClick={handleMoreClick} className="more-btn">{pageLoading ? "Yuklanyapti..." : "Yana yuklash"}</button>}
      </div>
      {wonUsers && <Winners winners={wonUsers} setModalUsers={setWonUsers} usersLength={users.length} />}
    </>
  );
};

export default Users;
