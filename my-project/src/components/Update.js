import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

function Update({updateGuest}) {
const [firstname,setFirstname]= useState("")
const [lastname,setLastname]= useState("")
const [email,setEmail]= useState("")
const [seatno,setSeatno]= useState(0)
const [typeofaccess,setTypeofaccess]= useState("")


    const {id} = useParams()

    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:9292/getguest/${id}`)
        .then((r)=>r.json())
        .then((guest)=>{
            setFirstname(guest.firstname)
            setLastname(guest.lastname)
            setEmail(guest.email)
            setSeatno(guest.seatno)
            setTypeofaccess(guest.typeofaccess)
        });
    },[])

    function handleUpdate(e)
    {
     e.preventDefault()
     fetch(`http://localhost:9292/guests/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
    },
        body:JSON.stringify({
           firstname: firstname,
            lastname: lastname,
            email: email,
            seatno: seatno,
            typeofaccess: typeofaccess
        })
     })
        .then((r)=>r.json())
        .then(guest=>{
            updateGuest(guest)
            navigate("/")
        })
    }
  return (
    <div>
        <form onSubmit={handleUpdate}>
        <label>First Name:</label>
        <input onChange={(e) =>{setFirstname(e.target.value)}}value={firstname} type="text" name="firstname" placeholder="enter first name"/>

        <label className="label2">Last Name:</label>
        <input onChange={(e) =>{setLastname(e.target.value)}}value={lastname}type="text" name="lastname" placeholder="enter last name"/>

        <label>Email:</label>
        <input onChange={(e) =>{setEmail(e.target.value)}} value={email}type="email" name="email" placeholder="example@gmail.com"/>

        <label>Seat No.:</label>
        <input onChange={(e) =>{setSeatno(e.target.value)}}value={seatno} type="number" name="seat_no" placeholder="enter seat no."/>

        <label onChange={(e) =>{setTypeofaccess(e.target.value)}}value={typeofaccess}>Type of Access:</label>
        <select name="access_type">
        <option value="vip">VIP</option>
        <option value="standard">Standard</option>
        </select>

        <input type="submit" value="Submit"/>
        </form>
    </div>
  )}
export default Update