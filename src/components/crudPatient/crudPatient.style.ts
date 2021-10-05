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
    box1: {
        backgroundColor: 'red',
    },
    box2: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    box3: {
        backgroundColor: 'blue',
        width: '50%',
        margin: 5
    },
    box4: {
        backgroundColor: 'yellow',
        width: '50%',
        margin: 5
    }
})
);

