import Header from "../components/headerComponent";
import Footer from '../components/footerComponent';
import {Box,Breadcrumbs,Link, Typography,Card, CardHeader,
   CardContent, CardMedia, Grid} from '@material-ui/core';
import {useState} from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
function HomePage(props) {
    const [Loading, setLoading] = useState(1);
    const arr = [1,2,3,4,5,6];
    setInterval(()=>setLoading(0),3000);
    return (
    <div style={{}}>
      <Header/>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
      </Breadcrumbs>
      <div>
        <Grid container justify="center" spacing={3}>
          <Grid container item xs={12} justify="center">
            {Loading ? <Skeleton variant="txt" height={50} width={250}/>:
            <h1>MS Dhoni</h1>}
            
          </Grid>
          <Grid container item xs={12} justify="center">
            {Loading ? <Skeleton variant="rec" width={250} height={250}/>:
            <img src="/images/dhoi.jpg"  style={{marginBottom:50}} />}
            
          </Grid>
          <Grid container item  xs={12} justify="center" spacing={2}>
            {arr.map((ele) => {
                return (<Grid item xs={5}>
                  {Loading?<Skeleton />:<Typography variant="subtitle1">(2013-2020)</Typography> }
                  { Loading?<Skeleton variant="text" height={200}/>:
                  <Typography varient="body1"color="textPrimary">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Mahendra Singh Dhoni (About this soundpronunciation (help·info) born 7 July 1981), is a former Indian international cricketer who captained the Indian national team in 
                        limited-overs formats from 2007 to 2016 and in Test 
                        cricket from 2008 to 2014. Under his captaincy, India won the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy
                  </Typography>
                  }
                </Grid>
                    
                  )
              })
            }
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
    );
  }
  export async function getServerSideProps() {
    // Fetch data from external API
    console.log("Hii");
    const baseurl = 'http://localhost:3001/';
    const res = fetch(baseurl+"dishes").then(response => {
      if (response.ok) {
        console.log(response);
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => {console.log("h1 -->"+response.json());})
  .then(dishes => {console.log("h2 -->"+dishes); return dishes;})
  .catch(error => console.log("h3 -->"+error.message));
    
    console.log("Here");
    
    console.log(res);
    const data = 3; 
  
    // Pass data to the page via props
    return { props: { data } }
  }
  export default HomePage;