import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
  ({
    box : {
      margin: 25,
      alignItems:'center',
      justifyContent: 'center',
      display:'flex',
      flexDirection:'column',
    },
    title :{
        backgroundColor: 'red',
    }
  })
);

