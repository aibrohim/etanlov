const Home = () => {
  return (
    <div className="container">
      <section className="section">
        <h2 className="section__title">Yangi tanlov</h2>
        <form method="POST" action="#" className="new-event">
          <label className="new-event__label">
            Tanlov nomi
            <input className="new-event__input" type="text" placeholder="some text"/>
          </label>
          <label className="new-event__label">
            Tanlov sanasi
            <input className="new-event__input" type="date" placeholder="some text"/>
          </label>
          <label className="new-event__label">
            Tanlov tavisifi
            <textarea className="new-event__input" cols="20" rows="10"></textarea>
          </label>
          <label className="new-event__label">
            Sovg'a
            <input className="new-event__input" type="text" placeholder="some text"/>
          </label>
          <label className="new-event__label">
            Tanlov homiysi
            <input className="new-event__input" type="text" placeholder="some text"/>
          </label>
          <div className="new-event__group">
            <label className="new-event__label">
              G’oliblar soni
              <input className="new-event__input" type="number" placeholder="some text"/>
            </label>
            <label className="new-event__label">
              Tanlov vaqti
              <input className="new-event__input" type="text" placeholder="some text"/>
            </label>
          </div>
          <div>
            <button type="reset">Bekor qilish</button>
            <button className="submit-btn new-event__submit" type="submit">Bekor qilish</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
