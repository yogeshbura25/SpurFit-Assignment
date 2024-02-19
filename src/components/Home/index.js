import "./index.css";

const Home = () => (
  <div className="full-home-page">
  <div className="home-page">
    <div className="home-content">
      <p className="ahead-text">Ahead app</p>
      <h1 className="home-head">Master your life by mastering your emotions</h1>
      <div className="app-and-rating">
        <img
          src="https://brandeps.com/logo-download/D/Download-on-the-App-Store-logo-vector-01.svg"
          className="app-store-image"
          alt="app store"
        />
        <div className="rating-container">
          <img
            src="https://t3.ftcdn.net/jpg/06/04/56/52/360_F_604565205_NMEgtTykGn8oEcqS0nHzVwDvvgWQbkhI.jpg"
            className="five-star-image"
            alt="five star"
          />
          <p className="rating">100+ AppStore reviews</p>
        </div>
      </div>
    </div>
    <img
      src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
      className="home-image"
      alt="home"
    />
  </div>
  </div>
);

export default Home;
