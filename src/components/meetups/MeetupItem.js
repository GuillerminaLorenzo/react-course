import MeetupItemStyle from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={MeetupItemStyle.item}>
      <div className={MeetupItemStyle.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={MeetupItemStyle.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={MeetupItemStyle.actions}>
        <button>Favourite</button>
      </div>
    </li>
  );
}

export default MeetupItem;
