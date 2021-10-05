import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        margin: 2,
    },
    link: {
        backgroundColor : 'white',
        margin : 10,
        color: 'black',
        padding: 10,
        fontFamily: 'Monaco',
        borderRadius:10,
    }
})
);

