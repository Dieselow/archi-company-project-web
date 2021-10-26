import { useStyles } from './searchBar.style';

const SearchBar = ({ searchQuery, setSearchQuery, setLoading } : {searchQuery : any, setSearchQuery:any, setLoading : any}) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (
        <form className={classes.searchBarForm}
            action="/"
            method="get"
            autoComplete="off"
        >
            <input 
                className={classes.searchBar}
                value={searchQuery}
                onInput={(e) => (setSearchQuery((e.target as HTMLInputElement).value), setLoading(true))}
                type="text"
                id="header-search"
                placeholder="Search"
                name="s"
            />
        </form>
    );
};

export default SearchBar;