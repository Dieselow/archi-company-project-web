import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: 2,
    },
    typography: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        fontFamily: 'Monaco',
        fontWeight: 'bold'
    },
    typographyLight: {
        fontSize: 16,
        color: 'black',
        padding: 8,
        fontFamily: 'Monaco',
    },
})
);

