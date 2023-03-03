
import Search from "./Search";
import GuestList from "./GuestList";

function MainContent({guests,setGuests,handleDelete,search,setSearch,handleSearch}){
    return(
        <div className="main-content">
            <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
            <GuestList guests={guests} setGuest={setGuests}handleDelete={handleDelete}/>
        </div>
    )
}
export default MainContent;