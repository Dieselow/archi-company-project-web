import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        padding : 5,
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        backgroundColor: '#037682',
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

