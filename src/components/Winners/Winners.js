const Winners = ({setModalUsers}) => {
  const handleModalClick = (evt) => {
    if (evt.target.matches(".winners")) {
      setModalUsers(null);
    }
  };

  return (
    <div className="winners" onClick={handleModalClick}>
      <div className="winners__content">
        <div className="users">
          <table className="users__table">
            <caption className="users__title">Ro’yxatdan o’tganlar (378)</caption>
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
                <td className="users__col">Farg'ona</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Winners;
