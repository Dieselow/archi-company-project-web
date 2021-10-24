import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(thme =>
  ({
    typography : {
        fontSize : 18,
        color: 'white',
        margin : 0,
        fontFamily: 'Monaco',
    },
    typographyTitle : {
      fontSize : 25,
      color: 'white',
      margin : 3,
      fontFamily: 'Monaco',
    },
    box : {
      alignItems:'center',
      justifyContent: 'center',
      display:'flex',
      flexDirection:'column',
      width: '95%',
      margin : 'auto',
      marginTop: '5%',
      backgroundColor: '#037682',
      borderRadius:10,      
    },
    button : {
        fontSize : 12,
        color: 'white',
        margin : 5,
        fontFamily: 'Monaco',
    },
    link: {
        float: 'none',
        color: 'black',
        textDecoration : 'none',
        display: 'block',
        textAlign: 'left',
        padding: 12,
        "&:hover": {
            background: "#efefef"
        }

    },
    dropdown: {
        display: 'block',
        position: 'absolute',
        backgroundColor : '#f9f9f9',
        minWidth : 160,
        zIndex: 1,
    },
    searchBarForm :{
        minHeight : 42,
        minWidth : 170,
        height : '60%',
    },
    searchBar : {
        minWidth : 170,
        height : '90%',
        minHeight : 40,
    }
  })
);

