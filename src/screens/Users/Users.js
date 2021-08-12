const Users = () => {
  return (
    <div className="container">
      <form className="choose-winner">
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
          <thead>
            <tr>
              <th>Ism va familiya</th>
              <th>Telefon raqam</th>
              <th>Yosh</th>
              <th>Joylashuv</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Muxammadjon Poziljonov
                <br />
                #1547896570
              </td>
              <td>
                <a href="tel:+998903489866">+998 90 348 98 66</a>
              </td>
              <td>86</td>
              <td>Farg'ona</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
