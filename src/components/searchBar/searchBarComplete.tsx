import React from 'react';
import Search from './searchBar';
import SearchResultElement from './searchResultElement';
import { api } from '../../utils/api/api';
import axios from 'axios';
import { bearerToken } from '../login/login';
import { useStyles } from './searchBar.style';

export type SearchResult = {
    displayName : string,
    entityType : string,
    name : string,
    root : string
}

export var filteredPosts : Array<SearchResult> = [];


const SearchBarComplete = () => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const [isLoading, setLoading] = React.useState(true);
    function RenderResults () {
        if(filteredPosts.length > 0 && searchQuery != '' && !isLoading) {
            return (
                <div className={classes.dropdown}>
                    {filteredPosts.map((post) => (
                        <SearchResultElement
                            root = {post.root}
                            displayName = {post.displayName}
                        />
                    ))}
                </div>
            );
                
        } 
        return null;
    }

    
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const request = axios.get(api.search + searchQuery, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    }).then((response: any) => {
        filteredPosts = response.data;
        setLoading(false);
    });

    return (
        <div>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setLoading = {setLoading}
            />
            {RenderResults()}
        </div>
    );
};


export default SearchBarComplete;