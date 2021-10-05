import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(thme =>
  ({
    typography : {
        fontSize : 25,
        color: 'white',
        margin : 10,
        fontFamily: 'Monaco',
    },
    box : {
      alignItems:'center',
      justifyContent: 'center',
      display:'flex',
      flexDirection:'column',
      width: '30%',
      margin : 'auto',
      marginTop: '10%',
      backgroundColor: '#037682',
      borderRadius:10,      
    },
    button : {
        fontSize : 12,
        color: 'white',
        margin : 5,
        fontFamily: 'Monaco',
    }
  })
);

