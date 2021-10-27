import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from './customButton';

export const useStyles = makeStyles(thme =>
({
    button: {
        margin: 10,
        backgroundColor: (props : Style ) => props.backgroundColor,
        padding: (props : Style ) => props.margin,
        borderRadius: 5
    },
    typography: {
        color: (props : Style ) => props.color,
        fontFamily: 'Monaco',
        borderRadius:2,   
        fontSize: (props : Style ) => props.fontSize,    
    }
})
);

