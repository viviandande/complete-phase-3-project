import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

function Edit({editEvent}) {

    const navigate = useNavigate()

const [typeofevent,setTypeofevent]= useState("")
const [date,setDate]= useState("")
const [time,setTime]= useState("")
const [numberofguests,setNumberofguests]= useState(0)


    const {id} = useParams()
    useEffect(()=>{
        fetch(` http://localhost:9292/getevent/${id}`)
        .then((r)=>r.json())
        .then((vent)=>{
            setTypeofevent(vent.typeofevent)
            setDate(vent.date)
            setTime(vent.time)
            setNumberofguests(vent.max_guests)

        });
    },[])

    function handleEdit(e)
    {

     e.preventDefault()
     fetch(`http://localhost:9292/events/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
    },
        body:JSON.stringify({
           typeofevent: typeofevent,
           date: date,
           time: time,
           numberofguests: numberofguests,

        })
     })
        .then((r)=>r.json())
        .then(vent=>{
            editEvent(vent)
            navigate("/events")
        })
    }
  return (
    <div>
        <form onSubmit={handleEdit}>
         <label className="label2">Type of Event:</label>
                <select onChange={(e) =>{setTypeofevent(e.target.value)}} value={typeofevent} name="typeofevent">
                    <option value="birthday">Birthday</option>
                    <option value="babyshower">Baby Shower</option>
                    <option value="graduation">Graduation</option>
                    <option value="galadinner">Gala Dinner</option>
                    <option value="wedding">wedding</option>
                </select>

                <label>Date:</label>
                <input onChange={(e) =>{setDate(e.target.value)}} value={date} type="date" className="label2" name="yyyymmdd"/>

                <label>Time:</label>
                <input onChange={(e) =>{setTime(e.target.value)}} value={time} type="time" className="label2" name="time"/>

                <label>Max vents:</label>
                <input onChange={(e) =>{setNumberofguests(e.target.value)}} value={numberofguests} name="numberofvents" type="number"/>
                <input type="submit" value="Set Event Details"/>
        </form>
    </div>
  )}
export default Edit;