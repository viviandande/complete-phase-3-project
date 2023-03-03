
function EventDetails({setViewForm,setEvent,postEvents}){
    function handleFormSubmit(event) {
        event.preventDefault();
        setViewForm("");
        setEvent("guests");
        const formData = {
            typeofevent: event.target.typeofevent.value,
            date: event.target.yyyymmdd.value,
            time: event.target.time.value,
            numberofguests: event.target.numberofguests.value
        }
        postEvents(formData)
    }
    return (
        <div className="event-details">
            <form onSubmit={handleFormSubmit}>
                <label className="label2">Type of Event:</label>
                <select name="typeofevent">
                    <option value="birthday">Birthday</option>
                    <option value="babyshower">Baby Shower</option>
                    <option value="graduation">Graduation</option>
                    <option value="galadinner">Gala Dinner</option>
                    <option value="wedding">wedding</option>
                </select>

                <label>Date:</label>
                <input type="date" className="label2" name="yyyymmdd"/>

                <label>Time:</label>
                <input type="time" className="label2" name="time"/>

                <label>Max Guests:</label>
                <input name="numberofguests" type="number"/>
                <input type="submit" value="Set Event Details"/>
            </form>
        </div>
    )
}
export default EventDetails;