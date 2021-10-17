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
        borderRadius: 2,
        fontSize: 20
    },
    background: {
        height: '90vh',
    },
    content: {
        backgroundColor: '#4e9fa7',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '75vh',
        margin: 10,
        borderRadius: 10,
    },
    appointements: {
        width: '60%',
        margin: 10
    },
    caregiverData: {
        width: '40%',
        margin: 15
    },
    box : {
        height: '100vh',
        width: '100vw',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
    }
})
);

