import { client } from "../../utils/api-client";

import User from "../../assets/img/user.svg";
import Calendar from "../../assets/img/calendar-event-line.svg";
import Trash from "../../assets/img/trash.svg";

const Contest = ({data}) => {
  const handleDeleteClick = () => {
    client(`contests/deactivate/${data.id}`, {
      method: "PUT",
      token: localStorage.getItem("token"),
    })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <li className="events__item">
      <div className="events__item-content">
        <h3 className="events__item-title">{data.title}</h3>
        <p className="events__item-desc">{data.desc}</p>
      </div>
      <div className="events__item-info">
        <time className="events__item-info-item events__item-date">
          <img src={Calendar} alt="user" />
          {data.orginizeDate}
        </time>
        <time className="events__item-info-item events__item-date"></time>
        <p className="events__item-info-item events__item-users">
          <img src={User} alt="user" />
          400
        </p>
        <button className="events__item-delete">
          <span>
            <img src={Trash} alt="" />
            O'chirish
          </span>
        </button>
      </div>
    </li>
  );
};

export default Contest;
