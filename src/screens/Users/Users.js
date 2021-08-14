import { useEffect, useMemo, useState } from "react";
import User from "../../components/User/User";
import Winners from "../../components/Winners/Winners";
import { useDebounce } from "../../hooks/useDebounce";
import { client } from "../../utils/api-client";

import RandomIcon from "../../assets/img/refresh-line.svg";

const Users = () => {
  const [wonUsers, setWonUsers] = useState(null);
  const [isRandomizing, setRandomizing] = useState(false);

  const [contests, setContests] = useState([]);

  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState("");
  const [users, setUsers] = useState([]);
  const [activeContest, setActiveContest] = useState("0");
  const debouncedContest = useDebounce(activeContest, 250);

  useEffect(() => {
    client(`contests`, {
      token: localStorage.getItem("token")
    })
      .then((data) => {
        setContests(data.data);
      });
  }, []);

  useEffect(() => {
    if (debouncedContest !== "0") {
      setUsersLoading(true);
      setUsersError("");
      client(`users/contest/${debouncedContest}`, {
        token: localStorage.getItem("token")
      })
        .then((data) => {
          setUsersLoading(false);
          setUsers(data.data);
          setUsersError("");
        })
        .catch((error) => {
          setUsersError(error.message);
          setUsersLoading(false);
        });
    }
  }, [debouncedContest]);

  const handleRandomizeSubmit = (evt) => {
    evt.preventDefault();

    if (activeContest !== "0") {
      setRandomizing(true);
      client(`winners/${activeContest}`, {
        token: localStorage.getItem("token")
      })
        .then((data) => {
          setRandomizing(false);
          setWonUsers(data.data);
        })
        .catch(() => {
          setRandomizing(false);
        });
    }
  };

  const handleContestChange = (evt) => {
    setActiveContest(evt.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activeContestType = useMemo(() => contests && contests.find(contest => debouncedContest === contest.id), [debouncedContest]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleRandomizeSubmit} className="choose-winner">
          <div className="choose-winner__block choose-winner__event">
            <label className="choose-winner__title">Tadbir</label>
            <select className="field choose-winner__select" defaultValue="0" onChange={handleContestChange}>
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
            <caption className="users__title">Ro’yxatdan o’tganlar (378)</caption>
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
      </div>
      {wonUsers && <Winners winners={wonUsers} setModalUsers={setWonUsers} />}
    </>
  );
};

export default Users;
