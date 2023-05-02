import { useContext } from "react";
import { Link } from "react-router-dom";

import MainNavigationStyle from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourite-context";

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);

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
            <Link to="/favourites">
              My Favourites
              <span className={MainNavigationStyle.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
