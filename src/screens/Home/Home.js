import { useEffect, useRef, useState } from "react";
import Contest from "../../components/Contest/Contest";
import { client } from "../../utils/api-client";

const Home = () => {
  const [contests, setContests] = useState([]);
  const createContestForm = useRef();

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    client(`contests`, {
      token: localStorage.getItem("token")
    }).then((data) => {
      setContests(data.data);
    });
  }, []);

  const handleCreateContest = (evt) => {
    evt.preventDefault();

    const {
      title: {value: title},
      date: {value: date},
      desc: {value: desc},
      prize: {prize},
      sponsor: {value: sponsor},
      winners: {value: winners},
      datetext: {value: datetext}
    } = createContestForm.current;

    if (
      title &&
      date &&
      desc &&
      prize &&
      sponsor &&
      winners &&
      datetext
    ) {
      setSending(true);
      client(`contests`, {
        token: localStorage.getItem("token"),
        data: {
          winnerCount: winners,
          sponsorTgId: sponsor,
          title: title,
          orginizeDate: datetext,
          desc: desc,
          gift: prize
        }
      })
        .then(() => {
          setSending(false);
          createContestForm.reset();
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
            Tanlov sanasi
            <input className="new-event__input" id="date" type="date" placeholder="some text"/>
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
        <ul className="events">
          {contests.map((contest) => (
            <Contest key={contest.id} data={contest}/>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
