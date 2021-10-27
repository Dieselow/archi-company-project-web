import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        alignItems: 'center',
        justifyContent: 'left',
        display: 'flex',
        flexDirection: 'row',
        margin: 2,
    },
    typography: {
        fontSize: 14,
        color: 'white',
        padding: 10,
        fontFamily: 'Monaco',
        fontWeight: 'bold'
    },
})
);