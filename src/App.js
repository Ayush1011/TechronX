import React,{useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
import Button from '@material-ui/core/Button';
import service from './images/1.png'
import tech from './images/pp.jpeg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import service1 from './images/service1.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import service2 from './images/service2.png'
import service3 from './images/service3.png'
import service4 from './images/service4.png'
import service5 from './images/service5.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import showcase from './images/showcase.jpeg'
import showcase1 from './images/showcase1.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class App extends  React.Component{


  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }






  render(){





    return(
        // <div className="col">
        //
        //   <div className="row" style={{height:"100px",backgroundColor:'black',}}>
        //
        //
        //     <div className="col-sm-2">
        //       <img src={tech} className="img-fluid" style={{height:"100%",width:'100px'}} />
        //
        //     </div>
        //
        //     <div className="col-sm-4">
        //
        //     </div>
        //
        //
        //     <div className="col-sm-2" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        //       <h3 style={{color:"white"}}>contact</h3>
        //     </div>
        //
        //
        //     <div className="col-sm-2" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        //       <h3 style={{color:"white"}}>About Us</h3>
        //     </div>
        //
        //     <div className="col-sm-2" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        //       <h3 style={{color:"white"}}>Blog</h3>
        //     </div>
        //
        //
        //   </div>
        //
        //
        //
        //
        //   <div  style={{height:"100vh",backgroundColor:'black',width:'100%'}}>
        //
        //     <div className="row">
        //       <div className="row-sm-6" style={{height:"100vh",alignItems:"center",  display: "flex",}}>
        //
        //         <div className="col">
        //
        //
        //         <div className="col-sm-6">
        //           <div className="col" style={{width:'40rem'}}>
        //             <h1 style={{color:"#fff",textAlign:'center',margin:'5px'}}>TechronX - IT Solutions and service company</h1>
        //             <h3 style={{color:"#fff",margin:"55px"}}>TechronX constantly advances to provide innovative IT solutions in order to make better future by improving your business.</h3>
        //           </div>
        //         </div>
        //
        //         <div className="col-sm-6">
        //           <div  style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
        //             <Button variant="contained" color="primary" style={{width:"200px"}}   >
        //               Contact US
        //             </Button>
        //           </div>
        //         </div>
        //         </div>
        //
        //       </div>
        //
        //
        //       <div className="row align-self-center">
        //
        //       <div className="row-sm-6" style={{backgroundColor:'black',width:'100vh',height:"100%",alignItems:'center',alignSelf:'center',display:'flex',}}>
        //
        //
        //         <img src={service} className="img-fluid" style={{width:'90%',alignItems:'center',justifyContent:'center',display:'flex'}} />
        //
        //       </div>
        //       </div>
        //     </div>
        //
        //
        //     <div className="row">
        //
        //
        //
        //
        //       <div className="row-sm-8"></div>
        //
        //
        //
        //     </div>
        //
        //   </div>
        //
        //
        //
        // </div>

        <div>
          <Grid container spacing={0} style={{backgroundColor:'black',}}>


            <Grid item xs={12} sm={3} style={{backgroundColor:'black',height:"80px"}}>





              <div style={{height:"50px",}}>

              <img src={tech} style={{height:'100%'}} />
              </div>
            </Grid>



            <Grid item xs={12} sm={3} style={{backgroundColor:'black',height:"80px"}}>






            </Grid>





            <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>





              <div style={{height:"50px",}}>


              <h4 style={{color:"#fff"}}>Contact us</h4>
              </div>
            </Grid>


            <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>





              <div style={{height:"50px",}}>

                <h4 style={{color:"#fff"}}>About us</h4>
              </div>
            </Grid>


            <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>





              <div style={{height:"50px",}}>

                <h4 style={{color:"#fff"}}>Blogs</h4>
              </div>
            </Grid>













            <Grid item xs={12} sm={6} style={{height:'100%',backgroundColor:'black'}}>

              <div style={{height:'100%',backgroundColor:'black'}}>

                <Grid item xs={12} s={12} style={{height:'40px',justifyContent:'center',display:'flex',alignItems:'center',width:'60%'}}>
                </Grid>



                <Grid item xs={12} s={12} style={{height:'40%',justifyContent:'center',display:'flex',alignItems:'center',width:'60%'}}>
                  <h1 style={{color:"#fff",margin:'5%',fontSize:'45px',}}>TechronX - IT Solutions and service company</h1>
                  </Grid>


                <Grid item xs={12} s={12} style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
                  <h4 style={{color:"#fff",margin:'5%'}}>TechronX constantly advances to provide innovative IT solutions in order to make better future by improving your business.</h4>
                </Grid>

                <Grid item xs={12} s={12} style={{display:'flex',margin:'5%'}}>
                  <Button variant="contained" color="primary" style={{width:"200px"}}   >
                                  Contact US
                               </Button>
                </Grid>

              </div>


            </Grid>







            <Grid item xs={12} sm={6} style={{height:'100%',backgroundColor:'black'}}>

                     <img src={service} className="img-fluid" style={{width:'80%',height:'80%',alignItems:'center',justifyContent:'center',display:'flex'}} />


            </Grid>






          </Grid>










          <Grid container spacing={3}>




            <Grid item xs={12} s={12} >

              <h1 style={{fontSize:"55px",marginLeft:'5%',padding:"5px",textDecoration: "underline double lightblue "}} >Our Services</h1>


            </Grid>



            <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}} data-aos="fade-right">
              <img src={service1} className="img-fluid" style={{width:undefined,height:undefined,alignItems:'center',justifyContent:'center',display:'flex'}} />

            </Grid>
            <Grid item xs={12} sm={4} style={{margin:'5%'}} >
              <div style={{width:"70%"}} >
                <p style={{fontSize:"35px",fontWeight:'italic'}} >Web and Mobile Development</p>

              </div>

              <div style={{}} data-aos="fade-left">
                <p style={{fontSize:"18px",color:'grey'}}>With capabilities across platforms (iOS, Android and Microsoft), our mobile app development services can availed to build both customer and enterprise apps. Our mobile solutions include sales force enabling apps, product configurators and mobile-based Lea</p>

              </div>
              <div style={{}}>
                <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none'}}>View Solution</a>

              </div>
            </Grid>







          </Grid>







          <Grid container spacing={3}>





            <Grid item xs={12} sm={5} style={{margin:'5%'}} data-aos="fade-right">
              <div style={{width:"70%"}} >
                <p style={{fontSize:"35px",fontWeight:'italic'}}>Graphic Desinging</p>

              </div>

              <div style={{wordBreak: "break-word"}}>
                <p style={{fontSize:"18px",color:'grey',}}>Graphic Desinging helps your business in visual communication with audience. We offer UI/UX, Logo design, infographic and many more services.</p>

              </div>
              <div style={{}}>
                <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none'}}>View Solution</a>

              </div>
            </Grid>





            <Grid item xs={12} sm={5} style={{alignItems:'center',justifyContent:'center',display:"flex"}} data-aos="fade-left">
              <img src={service2} className="img-fluid" style={{width:undefined,height:undefined,alignItems:'center',justifyContent:'center',display:'flex'}} />

            </Grid>






            <Grid container spacing={3}>



              <Grid item xs={12} sm={5} style={{alignItems:'center',justifyContent:'center',display:"flex"}} data-aos="fade-right">
                <img src={service3} className="img-fluid" style={{width:undefined,height:undefined,alignItems:'center',justifyContent:'center',display:'flex'}} />

              </Grid>

              <Grid item xs={12} sm={5} style={{margin:'5%'}} data-aos="fade-left">
                <div style={{width:"70%"}} >
                  <p style={{fontSize:"35px",fontWeight:'italic'}}>E-commerce Solution</p>

                </div>

                <div style={{wordBreak: "break-word"}}>
                  <p style={{fontSize:"18px",color:'grey',}}>TechronX provides a wide and dynamic range of e commerce services by understanding the needs of the customer. E commerce is a term that has emerged as a boon for online trading. With special skills in e learning and understandability it becomes easy to in</p>

                </div>
                <div style={{}}>
                  <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none'}}>View Solution</a>

                </div>
              </Grid>











            </Grid>








            <Grid container spacing={3}>





              <Grid item xs={12} sm={5} style={{margin:'5%'}} data-aos="fade-right">
                <div style={{width:"70%"}} >
                  <p style={{fontSize:"35px",fontWeight:'italic'}}>Digital Marketing Solution</p>

                </div>

                <div style={{wordBreak: "break-word"}}>
                  <p style={{fontSize:"18px",color:'grey',}}>We offer a few different types of Digital Marketing Service to Skyrock your business with SEO, SMO, PPC and data analysis.</p>

                </div>
                <div style={{}}>
                  <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none'}}>View Solution</a>

                </div>
              </Grid>





              <Grid item xs={12} sm={5} style={{alignItems:'center',justifyContent:'center',display:"flex"}} data-aos="fade-left">
                <img src={service4} className="img-fluid" style={{width:undefined,height:undefined,alignItems:'center',justifyContent:'center',display:'flex'}} />

              </Grid>






              <Grid container spacing={3}>



                <Grid item xs={12} sm={5} style={{alignItems:'center',justifyContent:'center',display:"flex"}} data-aos="fade-right">
                  <img src={service5} className="img-fluid" style={{width:undefined,height:undefined,alignItems:'center',justifyContent:'center',display:'flex'}} />

                </Grid>

                <Grid item xs={12} sm={5} style={{margin:'5%'}} data-aos="fade-left">
                  <div style={{width:"70%"}} >
                    <p style={{fontSize:"35px",fontWeight:'italic'}}>Custom Web Designing</p>

                  </div>

                  <div style={{wordBreak: "break-word"}}>
                    <p style={{fontSize:"18px",color:'grey',}}>A software program that is independent and dynamic and also comprehensive. Realizing the true pottential of web applications and also realize the customer demands. Offering for a special requirement of the customer.</p>

                  </div>
                  <div style={{}}>
                    <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none'}}>View Solution</a>

                  </div>
                </Grid>



</Grid>








              </Grid>


            </Grid>


          <Grid container>

        <Grid xs={12} s={12}  >
          <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={2}
              style={{justifyContent:'center',alignSelf:'center',alignItems:'center',display:'flex',}}
          >
            <Slider style={{margin:'5%',justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:'15px',height:"250px",width:'40%',borderWidth:"2px",borderColor:'black'}}>
              <Slide index={0} >

                <div style={{backgroundColor:'red',height:'250px'}}>
                  <img src={showcase} style={{height:"100%"}} />

                </div>
              </Slide>
              <Slide index={1}><div style={{backgroundColor:'red',height:'250px'}}>
                <img src={showcase1} style={{height:"100%"}} />

              </div>

              </Slide>

            </Slider>
          </CarouselProvider>


</Grid>
          </Grid>
        </div>

    )
  }
}


