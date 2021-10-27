import React from 'react';
import { Button, Typography, Box} from '@material-ui/core';
import { useStyles } from './banner.style';
import SearchBarComplete from '../searchBar/searchBarComplete';

export type Props = {
    onClick: (variable : any) => void;
    textButton : string; 
    textTypography?: string;
    searchBar?: boolean;
}

export type Style = {
    
}
export const Banner = (props: Props) => {    
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    function RenderSearchBar(){
        if(props.searchBar){
            return (<SearchBarComplete/>);
        }
        return null;
    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>{props.textTypography}</Typography>
        {RenderSearchBar()}
        <Button onClick={props.onClick} className={classes.button}>{props.textButton}</Button>
    </Box>
    );
}