import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Style } from './customForm';

export const useStyles = makeStyles(thme =>
({
    button: {
        margin: 10,
        backgroundColor: (props: Style) => props.backgroundColor,
        padding: (props: Style) => props.margin,
    },
    typography: {
        color: (props: Style) => props.color,
        fontFamily: (props: Style) => props.fontFamily,
        borderRadius: 2,
        fontSize: (props: Style) => props.fontSize,
    },
    box: {
        width: '80%',
        margin: 5,
        padding: 5
    }
})
);

