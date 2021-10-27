import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        margin: 2,
        backgroundColor : '#4e9fa7',
        borderRadius : 10,
    },
    typography: {
        fontSize: 18,
        color: 'white',
        minWidth: 80,
        padding: 10,
        fontFamily: 'Monaco',
        fontWeight: 'bold'
    },
})
);
