import { useEffect, useRef, useState } from "react";
import Contest from "../../components/Contest/Contest";
import { client } from "../../utils/api-client";

const Home = () => {
  const [contests, setContests] = useState([]);
  const [contestsLoading, setContestsLoading] = useState(false);
  const [contestsError, setContestsError] = useState("");

  const createContestForm = useRef();
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    setContestsLoading(true);
    setContestsError("");
    client(`contests`, {
      token: localStorage.getItem("token")
    })
      .then((data) => {
        setContestsError("");
        setContestsLoading(false);
        setContests(data.data);
      })
      .catch((error) => {
        setContestsLoading(false);
        setContestsError(error.message);
      });
  }, []);

  const handleCreateContest = (evt) => {
    evt.preventDefault();

    const {
      title: {value: title},
      img: {files},
      desc: {value: desc},
      prize: {value: prize},
      sponsor: {value: sponsor},
      winners: {value: winners},
      datetext: {value: datetext}
    } = createContestForm.current;

    if (
      title &&
      desc &&
      prize &&
      sponsor &&
      winners &&
      datetext
    ) {
      const formData = new FormData();
      formData.append("winnerCount", winners);
      formData.append("sponsorTgId", sponsor);
      formData.append("title", title);
      formData.append("orginizeDate", datetext);
      formData.append("desc", desc);
      formData.append("gift", prize);
      formData.append("image", files[0]);
      setSending(true);
      fetch(`https://api.rajabov.uz/api/contests`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData
      })
        .then((res) => {
          setSending(false);
          return res.json();
        })
        .then((data) => {
          if (data.success) {
            createContestForm.current.reset();
            setSendError("");
            setContests([...contests, data.data]);
            return;
          }
          return Promise.reject(data);
        })
        .catch((error) => {
          setSending(false);
          setSendError(error.message);
        });
    }
  };

  return (
    <div className="container">
      <section className="section">
        <h2 className="section__title">Yangi tanlov</h2>
        <form ref={createContestForm} onSubmit={handleCreateContest} method="POST" action="#" className="new-event">
          <label className="new-event__label">
            Tanlov nomi
            <input className="new-event__input" id="title" type="text" placeholder="some text"/>
          </label>
          <label className="new-event__label">
            Tanlov rasmi
            <input className="new-event__input" id="img" type="file" accept="image/*" placeholder="Tanlov rasmini tanlang"/>
          </label>
          <label className="new-event__label">
            Tanlov tavisifi
            <textarea className="new-event__input" id="desc" cols="20" rows="10"></textarea>
          </label>
          <label className="new-event__label">
            Sovg'a
            <input className="new-event__input" id="prize" type="text" placeholder="some text"/>
          </label>
          <label className="new-event__label">
            Tanlov homiysi
            <input className="new-event__input" id="sponsor" type="text" placeholder="some text"/>
          </label>
          <div className="new-event__group">
            <label className="new-event__label">
              G’oliblar soni
              <input className="new-event__input" id="winners" type="number" placeholder="some text"/>
            </label>
            <label className="new-event__label">
              Tanlov vaqti
              <input className="new-event__input" id="datetext" type="text" placeholder="some text"/>
            </label>
          </div>
          <div className="new-event__actions">
            <button className="new-event__cancel submit-btn submit-btn--outlined" type="reset">Bekor qilish</button>
            <button disabled={sending} className="submit-btn new-event__submit" type="submit">{sending ? "Sending..." : "Send"}</button>
          </div>
          {sendError && <p>{sendError}</p>}
        </form>
      </section>
      <section className="section">
        <h2 className="section__title">Barcha tadbirlar</h2>
        {contestsLoading && <p style={{fontStyle: "italic"}}>Tadbirlar kelyapti...</p>}
        {contestsError && <p>{contestsError}</p>}
        <ul className="events">
          {contests.map((contest) => (
            <Contest key={contest.id} data={contest} setContests={setContests}/>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
