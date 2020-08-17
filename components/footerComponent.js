import {Grid, IconButton, Link,Paper,Button, List, ListItem, ListItemIcon ,ListItemText, ButtonGroup} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {makeStyles} from '@material-ui/core/styles';
import FaceBookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles({
    root: {
      color: 'white',
      padding:0,
      margin:0,
    },
  });
  
export default function Footer(){
    const classes = useStyles();
    return(
        
        <div style={{backgroundColor:"Navy",color:"white", marginTop:100}}>
            <Grid container item justify="space-around" alignItems="center">
                <Grid container item justify="space-around" xs={12}>
                    <Link href='/'>
                        <IconButton><HomeIcon/><h5>Home</h5></IconButton>
                    </Link>
                    <Link href='/'>
                        <IconButton><InfoIcon/><h5>About</h5></IconButton>
                    </Link>
                    <Link href='/'>
                        <IconButton><ContactMailIcon/><h5>Contact</h5></IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <IconButton><FaceBookIcon fontSize="large"/></IconButton>
                        <IconButton><InstagramIcon fontSize="large"/></IconButton>
                        <IconButton><TwitterIcon fontSize="large"/></IconButton>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
}