
import React, { useEffect,useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import EventsList from './components/EventsList';
import About from './components/About';
import Update from './components/Update';
import Edit from './components/Edit';



function App() {

  const [guests, setGuests] = useState([])
  const [search, setSearch] = useState('')
  const [events, setEvents] = useState([])



  useEffect(() =>{
    fetch('http://localhost:9292/guests')
    .then(response => response.json())
    .then(data =>{
      setGuests(data)
    })
    fetch(' http://localhost:9292/events')
    .then(response => response.json())
    .then(data =>{
      setEvents(data)
    })
  },[search])

  function handleSearch(event){
    setSearch(event.target.value)
  }

  const handleDelete = guest=> {
    fetch(`http://localhost:9292/guests/${guest}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
      setGuests(guests.filter(theGuest => theGuest.id !== guest));
  };
  const deleteEvents = vent  =>{
    fetch(`http://localhost:9292/events/${vent}`,{
      method: "DELETE",

    })
    setEvents(events.filter(theVent => theVent.id !== vent))
};

  function postEvents(formData){
    fetch('http://localhost:9292/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data =>{
    setEvents([...events, data])
  })
}
function postGuest(guestFormData){
  fetch('http://localhost:9292/guests', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(guestFormData)
})
.then(response => response.json())
.then(data =>{
  setGuests([...guests, data])
  })
}

function editEvent(event) {
  setEvents([...events].map(evnt => {
    if(evnt.id === event.id) {
      return event
    } else {
      return evnt
    }
  }))
}

function updateGuest(guest) {
  setGuests([...guests].map(gst => {
    if(gst.id === guest.id) {
      return guest
    } else {
      return gst
    }
  }))
}
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
            <div className='wrapper'>
              <SideBar postEvents={postEvents} postGuest={postGuest}/>
              <MainContent search={search}setSearch={setSearch} guests={guests} handleDelete={handleDelete}handleSearch={handleSearch}/>
            </div>} />
            <Route path="/events" element={<EventsList events={events} deleteEvents={deleteEvents}/>}/>
            <Route path="/aboutus" element={<About/>}/>
            <Route path="/update/:id" element={<Update updateGuest={updateGuest}/>}/>
            <Route path="/edit/:id" element={<Edit editEvent={editEvent}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
