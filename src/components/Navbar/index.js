import "./index.css";


const Navbar = () => (
    <nav className="nav-container">
    <div className="header-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-items">
        <li className='nav-list-item'>
          <a href="#" className="nav-items">
            Emotions
          </a>
        </li>
        <li className='nav-list-item'>
          <a href="#" className="nav-items">
            Manifesto
          </a>
        </li>
        <li className='nav-list-item'>
          <a href="#" className="nav-items">
            Self-awareness test
          </a>
        </li>
        <li className='nav-list-item'>
          <a href="#" className="nav-items">
            Work With Us
          </a>
        </li>
      </ul>
      <button className="download-app-btn">Download App</button>
    </div>
  </nav>
)

export default Navbar;