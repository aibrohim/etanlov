import { useEffect, useMemo, useState } from "react";
import Winners from "../../components/Winners/Winners";
import { useDebounce } from "../../hooks/useDebounce";
import { client } from "../../utils/api-client";

const Users = () => {
  const [wonUsers, setWonUsers] = useState(false);

  const [contests, setContests] = useState([]);
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
    console.log(debouncedContest !== "0");
    if (debouncedContest !== "0") {
      client(`users/contest/${debouncedContest}`, {
        token: localStorage.getItem("token")
      })
        .then((data) => {
          console.log(data);
        });
    }
  }, [debouncedContest]);

  const handleRandomizeSubmit = (evt) => {
    evt.preventDefault();

    setWonUsers(["1"]);
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
              <option value="0">Tadbirni tanlang</option>
              {contests.map((contest) => (
                <option key={contest.id} value={contest.id}>{contest.title}</option>
              ))}
            </select>
          </div>
          <div className="choose-winner__block choose-winner__winner">
            <h2 className="choose-winner__title">G’oliblarni aniqlash</h2>
            <div className="choose-winner__right-content">
              <output className="choose-winner__input field">{activeContestType && activeContestType.winnerCount}</output>
              <button className="submit-btn" type="submit">Randomlash</button>
            </div>
          </div>
        </form>

        <div className="users">
          <table className="users__table">
            <caption className="users__title">Ro’yxatdan o’tganlar (378)</caption>
            <thead className="users__header">
              <tr className="users__row">
                <th className="users__col users__header-col">Ism va familiya</th>
                <th className="users__col users__header-col">Telefon raqam</th>
                <th className="users__col users__header-col">Yosh</th>
                <th className="users__col users__header-col">Joylashuv</th>
              </tr>
            </thead>
            <tbody>
              <tr className="users__row">
                <td className="users__col">
                  <strong>Muxammadjon Poziljonov</strong>
                  <br />
                  <span className="users__user-id">#1547896570</span>
                </td>
                <td className="users__col">
                  <a className="users__user-phone" href="tel:+998903489866">+998 90 348 98 66</a>
                </td>
                <td className="users__col">86</td>
                <td className="users__col">Farg'ona</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {wonUsers && <Winners setModalUsers={setWonUsers} />}
    </>
  );
};

export default Users;
