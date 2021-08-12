import { useState } from "react";
import Winners from "../../components/Winners/Winners";

const Users = () => {
  const [wonUsers, setWonUsers] = useState(false);

  const handleRandomizeSubmit = (evt) => {
    evt.preventDefault();

    setWonUsers(["1"]);
  };

  return (
    <>
      <div className="container">
        <form onClick={handleRandomizeSubmit} className="choose-winner">
          <div className="choose-winner__block choose-winner__event">
            <label className="choose-winner__title">Tadbir</label>
            <select className="field choose-winner__select" name="" id="">
              <option value="1">Salom</option>
              <option value="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum, mollitia et quam esse voluptatibus deserunt quos eum aperiam! Praesentium.</option>
            </select>
          </div>
          <div className="choose-winner__block choose-winner__winner">
            <h2 className="choose-winner__title">G’oliblarni aniqlash</h2>
            <div className="choose-winner__right-content">
              <input className="choose-winner__input field" type="number" />
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
