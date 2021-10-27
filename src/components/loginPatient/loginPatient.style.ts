import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        alignItems:'center',
        justifyContent: 'center',
        display:'flex',
        margin : '10%',
    },    
    image: {
        borderRadius:30,
    }
})
);

