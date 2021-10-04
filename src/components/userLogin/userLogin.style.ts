import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(thme =>
  ({
    typography : {
        fontSize : (props : any) => props.fontSize,
        backgroundColor : (props : any) => props.backgroundColor,
    }
  })
);

