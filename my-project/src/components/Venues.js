import{useState,useEffect} from "react"

function Venues(){

    const [venues, setVenues] =useState([])

    useEffect(() =>{
        fetch("http://localhost:9292/venues")
        .then(res => res.json())
        .then(data => setVenues(data))
    }, [])
    return(
        <div className="venues">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">eventName</th>
                        <th scope="col">eventType</th>
                        <th scope="col">numberOfGuests</th>
                        <th scope="col">guestName</th>
                        <th scope="col">guestEmail</th>
                    </tr>
                </thead>
                <tbody>
                {
                    venues.map((venue, index) => {
                        return (
                            <tr key={index}>
                                <td>{venue.eventName}</td>
                                <td>{venue.eventType}</td>
                                <td>{venue.numberOfGuests}</td>
                                <td>{venue.guestName}</td>
                                <td>{venue.guestEmail}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>

        </div>
    )
}

export default Venues;