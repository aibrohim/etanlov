const User = ({data}) => {
  const {firstName, telegramId, phoneNumber: phone, age: year, gender} = data;
  const currentYear = new Date().getFullYear();

  const age = currentYear - year;
  return (
    <tr className="users__row">
      <td className="users__col">
        <p className="user__user-name">{firstName ? firstName : "Ma'lumot kiritilmagan"}</p>
        <span className="users__user-id">#{telegramId ? telegramId : "Ma'lumot kiritilmagan"}</span>
      </td>
      <td className="users__col">
        <a className="users__user-phone" href={"tel:" + phone}>{phone ? phone : "Ma'lumot kiritilmagan"}</a>
      </td>
      <td className="users__col">{age ? age : "Ma'lumot kiritilmagan"}</td>
      <td className="users__col">{gender ? gender : "Ma'lumot kiritilmagan"}</td>
    </tr>
  );
};

export default User;
