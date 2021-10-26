import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        padding : 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 0,
        backgroundColor: '#037682',
        borderRadius: 30, 
        minWidth: 500,       
    },
    typography: {
        fontSize: 30,
        color: 'white',
        padding: 10,
        fontFamily: 'Monaco',
        fontWeight: 'bold'
    },
})
);
