import React from 'react';
import { Button, Typography, Box, Dialog, useScrollTrigger } from '@material-ui/core';
import { useStyles } from './userData.style';
import { UserItem, User } from '../userItem/userItem';


const getAllUsers= {

}
type Props = {
    users: User[],
}

const onClick = (variable: any) => {
    console.log('on click !');
}

const onClickCreate = () => {

}
  
    
    export const UserData = (props: Props) => {
        const [open, setOpen] = React.useState(false);
        const styleProps = {
        }
        const classes = useStyles(styleProps);
    
        const onClickCustom = () => {
            console.log('on click !');
            setOpen(true);
        }
        const handleClose = (value: string) => {
            console.log(value);
            setOpen(false);
        }
    
    
        return (<Box className={classes.box}>
            <Typography className={classes.typography}>Patient list</Typography>
            <Box>
                {props.users.map(x => <UserItem user={x}/>)}
            </Box>
        </Box>
        );
    }
