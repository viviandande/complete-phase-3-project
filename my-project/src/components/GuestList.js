import { Link } from "react-router-dom";

function GuestList({guests, handleDelete}){

    return(
        <div className='guest-list'>
            <div className='guest-list-item headers'>
                            <span>NAME</span>
                            <span>Email</span>
                            <span>Seat No</span>
                            <span>Type of access</span>
            </div>
            {
                guests.map((guest, index) => {
                    return (
                        <div key={index} className='guest-list-item'>
                            <span>{guest.firstname} {guest.lastname}</span>
                            <span>{guest.email}</span>
                            <span>{guest.seatno}</span>
                            <span>{guest.typeofaccess.toUpperCase()}</span>
                            <button className="btn-btn">
                               <Link to={`/update/${guest.id}`}>Update</Link>
                            </button>
                            <button className="btn-btn"onClick={() =>handleDelete(guest.id)}>Delete</button>
                            </div>
                    )
                })
            }

        </div>
    )
}
export default GuestList;