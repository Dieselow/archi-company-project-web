import { Link } from 'react-router-dom';
import { useStyles } from './searchBar.style';

const SearchResultElement = ( {root, displayName} : {root : string, displayName:string}) => {
    
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (
 
           
           <Link className={classes.link}  to={root}>{displayName}</Link>
           
            
        
    );
};

export default SearchResultElement;