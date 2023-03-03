import React,{useState} from 'react';
import EventDetails from "./EventDetails";
import AddGuest from "./AddGuest";


function SideBar({postEvents, postGuest}){
    const [viewForm, setViewForm] = useState("");
    const [event,setEvent] = useState('')


function handleClick(typeOfForm){

    if(typeOfForm === "event-details"){
        setViewForm("event-details");
    }
    else if(typeOfForm === "add-guest"){
        setViewForm("add-guest");
    }
}
let formToDisplay = ""
if(viewForm === "event-details"){
    formToDisplay = <EventDetails setViewForm={setViewForm} setEvent={setEvent} postEvents={postEvents}/>
}
else if(viewForm === "add-guest"){
    formToDisplay = <AddGuest setViewForm={setViewForm} postGuest={postGuest}/>
}

    return(
        <div className="side-bar">
         {formToDisplay}
            <button className='btn'onClick={() =>handleClick("event-details")}>Create Event</button>
            {event ==="" ?null : <button className='btn'onClick={() =>handleClick("add-guest")}>Add Guest</button>}
        </div>
    )
}
export default SideBar;