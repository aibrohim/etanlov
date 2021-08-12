import { client } from "../../utils/api-client";

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
        <time className="events__item-info-item events__item-date">{data.orginizeDate}</time>
        <p className="events__item-info-item events__item-users">400</p>
        <button onClick={handleDeleteClick} className="events__item-delete">
          <span>O'chirish</span>
        </button>
      </div>
    </li>
  );
};

export default Contest;
