import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        padding : 20,
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
        flexDirection: 'column',
        margin: 0,
        backgroundColor: '#037682',
        borderRadius: 30,  
        maxHeight: 600, 
        overflow: 'auto'      
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