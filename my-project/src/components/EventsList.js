import { Link } from "react-router-dom"
function EventsList({events,deleteEvents,UpdateForm}){
    return(
        <div className="evnt-list">
            <div className='evnt-list-item headers'>
                            <span>EVENT TYPE</span>
                            <span>DATE</span>
                            <span>TIME</span>
                            <span>MAX GUEST</span>
            </div>
            {
                events.map((vent, index) => {
                    return (
                        <div key={index} className='evnt-list-item'>
                            <span>{vent.typeofevent}</span>
                            <span>{vent.date}</span>
                            <span>{vent.time}</span>
                            <span>{vent.numberofguests}</span>
                            <button className="btn-btn">
                            <Link to={`/edit/${vent.id}`}>Edit</Link>
                            </button>
                            <button className="btn-btn"onClick={() =>deleteEvents(vent.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default EventsList