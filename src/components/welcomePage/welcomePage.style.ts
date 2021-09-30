import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
  ({
    avatar: {
      height:'25%',
      width:'25%',
    },
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

