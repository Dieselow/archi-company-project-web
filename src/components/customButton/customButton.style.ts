import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    button: {
        margin: 10,
        backgroundColor: 'white',
        padding: 10,
    },
    typography: {
        color: 'black',
        fontFamily: 'Monaco',
        borderRadius:2,   
        fontSize: 20     
    }
})
);

