
function AddGuest({setViewForm,postGuest}){
    function handleFormSubmit(event) {
        event.preventDefault();
        setViewForm("");
        const guestFormData = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            seatno: event.target.seatno.value,
            typeofaccess: event.target.typeofaccess.value


        }
        postGuest(guestFormData)
    }

    return(
        <div className="add-guest">
              <form className="styleForm" onSubmit={handleFormSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstname" placeholder="enter first name"/>

        <label className="label2">Last Name:</label>
        <input type="text" name="lastname" placeholder="enter last name"/>

        <label>Email:</label>
        <input type="email" name="email" placeholder="example@gmail.com"/>

        <label>Seat No.:</label>
        <input type="number" name="seatno" placeholder="enter seat no."/>

        <label>Type of Access:</label>
        <select name="typeofaccess">
        <option value="vip">VIP</option>
        <option value="standard">Standard</option>
        </select>

        <input type="submit" value="Submit"/>
    </form>
        </div>
    )
}
export default AddGuest;