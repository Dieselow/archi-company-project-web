import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
  ({
    box : {
      alignItems:'center',
      justifyContent: 'center',
      display:'flex',
      flexDirection:'column',
      margin : 0,
      backgroundColor : 'green'
    },
    title :{
        backgroundColor: 'red',
    }
  })
);

