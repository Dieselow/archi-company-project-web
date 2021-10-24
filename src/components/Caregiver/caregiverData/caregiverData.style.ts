import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        backgroundColor : '#037682',
        borderRadius: 10
    },
    typography: {
        fontSize: 20,
        color: 'white',
        margin: 10,
        fontFamily: 'Monaco',
        fontWeight: 'bold'
    },
    titleTypography: {
        fontSize: 30,
        color: 'white',
        padding: 10,
        fontFamily: 'Monaco',
        fontWeight: 'bold'
    },
})
);

