import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './header.style';
import { CustomButton } from '../customButton/customButton';
import { Link } from "react-router-dom";
import SearchBarComplete from '../searchBar/searchBarComplete';
import { bearerToken } from '../login/login';
import axios from 'axios';
import { api } from '../../utils/api/api';

type Props = {
}
export var userType : string = '';

export const Header = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);


    const [isLoading, setLoading] = React.useState(true);
    

    function RenderSearchBar(){
        console.log("UserType = ", userType);
        if ((userType == 'Caregiver' || userType == 'Secretary' )) {
            console.log("RENDERED")
            return (<SearchBarComplete/>);
        }
        console.log("annule");
        return null;
    }
    axios.get(api.getUserType, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    }).then((response: any) => {
        userType = response.data;
        console.log(userType.toString());
        setLoading(false);
    });


    return (
        <Box className={classes.box}>
            <Link className={classes.link} to="/login">Register/Login</Link>
            {RenderSearchBar()}
            
        </Box>
        
    );
}