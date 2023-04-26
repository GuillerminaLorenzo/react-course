import { Link } from "react-router-dom";

import MainNavigationStyle from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={MainNavigationStyle.header}>
      <div className={MainNavigationStyle.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
