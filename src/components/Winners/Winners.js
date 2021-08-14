import showNoData from "../../utils/showNoData";

const Winners = ({winners, setModalUsers}) => {
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
              {winners && winners.map((winner) => (
                <tr key={winner.id} className="users__row">
                  <td className="users__col">
                    <p className="users__user-name">{showNoData(winner.firstName)}</p>
                  </td>
                  <td>{showNoData(winner.telegramId)}</td>
                  <td className="users__col">
                    <a className="users__user-phone" href={"tel:" + winner.phoneNumber}>{showNoData(winner.phoneNumber)}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Winners;
