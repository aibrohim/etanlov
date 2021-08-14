import { client } from "../../utils/api-client";

import Calendar from "../../assets/img/calendar-event-line.svg";
import Trash from "../../assets/img/trash.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contest = ({data}) => {
  const [isActive, setActive] = useState(data.isActive);
  const handleDeleteClick = () => {
    client(`contests/deactivate/${data.id}`, {
      method: "PUT",
      token: localStorage.getItem("token"),
    })
      .then(() => {
        setActive(false);
      });
  };

  return (
    <li className="events__item" style={{opacity: isActive ? "1" : "0.6"}}>
      <div className="events__item-content">
        <h3 className="events__item-title"><Link to={"/users?eventId=" + data.id}>{data.title}</Link></h3>
        <p className="events__item-desc">{data.desc}</p>
      </div>
      <div className="events__item-info">
        <time className="events__item-info-item events__item-date">
          <img src={Calendar} alt="user" />
          {data.orginizeDate}
        </time>
        {isActive ? <button onClick={handleDeleteClick} className="events__item-delete">
          <span>
            <img src={Trash} alt="" />
            O'chirish
          </span>
        </button> : null}
      </div>
    </li>
  );
};

export default Contest;
