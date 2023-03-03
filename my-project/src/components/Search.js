import icon from '../icon/search-14-64.png';

function Search({handleSearch}){

    return(
        <div className='search'>
            <input type="text" placeholder="Search guest" onChange={handleSearch}/>
            <img src={icon} alt="search logo"/>
        </div>
    )
}
export default Search;