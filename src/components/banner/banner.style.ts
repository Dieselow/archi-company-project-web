import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // To be vertically aligned
        width: '100%',
        margin: 0,
        backgroundColor: '#037682',
    },
    typography: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#1c838e',
        margin: 10
    }
})
);

