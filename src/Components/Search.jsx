import style from '../css/Search.module.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Search({search}) {
    return ( 
        <main className={style.containerSearch}> 
    <div className={style.containerInput}>
        <SearchRoundedIcon/>
        <input type="txt"  placeholder='Search' onChange={(e)=>{search(e.target.value)}}/>
    </div> 
    </main> 
    );
}

export default Search;