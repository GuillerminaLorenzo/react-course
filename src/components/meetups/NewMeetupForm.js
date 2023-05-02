import Card from "../ui/Card";
import NewMeetupFormStyle from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={NewMeetupFormStyle.form}>
        <div className={NewMeetupFormStyle.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={NewMeetupFormStyle.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={NewMeetupFormStyle.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={NewMeetupFormStyle.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={NewMeetupFormStyle.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
