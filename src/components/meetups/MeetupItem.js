import { useContext } from "react";

import Card from "../ui/Card";
import MeetupItemStyle from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourite-context";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function togglerFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={MeetupItemStyle.item}>
      <Card>
        <div className={MeetupItemStyle.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={MeetupItemStyle.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={MeetupItemStyle.actions}>
          <button onClick={togglerFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
