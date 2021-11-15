import classes from './Search.module.css'
import searchBtn from '../assets/search.png'

const Search = (params) => {
    return <form className={classes.search}>
        <label for="searchbox" className={classes.searchLabel}>Search</label>
        <div className={classes.searchContainer}>
            <input type="text" id="searchbox" name="searchbox" className={classes.searchbox}/>
            <img src={searchBtn} className={classes.searchBtn} alt="search button"></img>
        </div>
    </form>

}

export default Search