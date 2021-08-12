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
          <div className="new-event__actions">
            <button className="new-event__cancel submit-btn submit-btn--outlined" type="reset">Bekor qilish</button>
            <button className="submit-btn new-event__submit" type="submit">Bekor qilish</button>
          </div>
        </form>
      </section>
      <section className="section">
        <h2 className="section__title">Barcha tadbirlar</h2>
        <ul className="events">
          <li className="events__item">
            <div className="events__item-content">
              <h3 className="events__item-title">🎯Tajribali va muvaffaqiyatli soha liderlari nutqini o'tkazib yubormaslik uchun hoziroq ro'yxatdan o'ting.</h3>
              <p className="events__item-desc">Yurtimizda belgilangan karantin cheklovlari sabab, loyihamizni yirik zallarda o'tkazish imkoni hozircha mavjud emas. Ammo bu sizga yangi bilimlarni yetkazishimizga to'sqinlik qila olmaydi...</p>
            </div>
            <div className="events__item-info">
              <time className="events__item-info-item events__item-date">11.08.2021</time>
              <p className="events__item-info-item events__item-users">400</p>
              <button className="events__item-delete">
                <span>O'chirish</span>
              </button>
            </div>
          </li>
          <li className="events__item">
            <div className="events__item-content">
              <h3 className="events__item-title">🎯Tajribali va muvaffaqiyatli soha liderlari nutqini o'tkazib yubormaslik uchun hoziroq ro'yxatdan o'ting.</h3>
              <p className="events__item-desc">Yurtimizda belgilangan karantin cheklovlari sabab, loyihamizni yirik zallarda o'tkazish imkoni hozircha mavjud emas. Ammo bu sizga yangi bilimlarni yetkazishimizga to'sqinlik qila olmaydi...</p>
            </div>
            <div className="events__item-info">
              <time className="events__item-info-item events__item-date">11.08.2021</time>
              <p className="events__item-info-item events__item-users">400</p>
              <button className="events__item-delete">
                <span>O'chirish</span>
              </button>
            </div>
          </li>
          <li className="events__item">
            <div className="events__item-content">
              <h3 className="events__item-title">🎯Tajribali va muvaffaqiyatli soha liderlari nutqini o'tkazib yubormaslik uchun hoziroq ro'yxatdan o'ting.</h3>
              <p className="events__item-desc">Yurtimizda belgilangan karantin cheklovlari sabab, loyihamizni yirik zallarda o'tkazish imkoni hozircha mavjud emas. Ammo bu sizga yangi bilimlarni yetkazishimizga to'sqinlik qila olmaydi...</p>
            </div>
            <div className="events__item-info">
              <time className="events__item-info-item events__item-date">11.08.2021</time>
              <p className="events__item-info-item events__item-users">400</p>
              <button className="events__item-delete">
                <span>O'chirish</span>
              </button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
