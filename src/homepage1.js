import React,{useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
import Button from '@material-ui/core/Button';
import service from './images/1.png'
import tech from './images/pp.jpeg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import service1 from './images/service1.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import service2 from './images/service2.png'
import service3 from './images/service3.png'
import service4 from './images/service4.png'
import service6 from './images/service6.png'

import service5 from './images/service5.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import showcase from './images/showcase.jpeg'
import showcase1 from './images/showcase1.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TextTransition, { presets } from "react-text-transition";
import intro from "./images/intro.gif"
import Image from "react-image-resizer";
import { Wave } from 'react-animated-text';
import Typing from 'react-typing-animation';
import Navi from './navigation'
import BottomNavigator from "./bottomNavigator";
import './divs.css'
import familair from './images/familiar.png'
import play from './images/play.png'
import {Container, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";

var height: window.innerHeight
let i=0;
const TEXTS = [
    "Web",
    "WordPress",
    "Angular",
    "React"
];


export default class Homepage1 extends React.Component {

    constructor() {
        super();
        this.state={
            height:"100",
            width:"100",
            name:["Assistant","Relay","Helper"],
            actual:"",
            width1:0

        }
    }

    componentDidMount() {

        setInterval(()=>{
            if(i===this.state.name.length)
            {
                i=0;
            }
            this.setState({actual:this.state.name[i]})
            i++;

        },1000)
    }
    findwidth=()=>{
        this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px',width1:window.innerWidth});

    }

    componentWillMount(){
        console.log("WINDOW : ",window);
        setInterval(()=>{
            this.findwidth();
        },1000)
        this.findwidth()
    }

    render() {

        return (

            <div >
                {this.state.width1<=1420?
                    <div></div>
                :
                    <Navi/>
                }

                <Grid container className="maindivA" style={{ height:this.state.height, }}>
                    <Grid item xs={6} sm={6}>

                        <div style={{backgroundColor:'black',width:'100%',display:'flex'}}>





                                <Grid container sm={6} xs={12}>
                                    <div style={{marginLeft:'10%',marginTop:'15%'}}>
                                        <h1 style={{color:'white',}}>
                                            TECHRONX
                                        </h1>
                                        <h1 style={{color:"white"}}>

                                            <TextTransition
                                                text={ "Your "+this.state.name[i % this.state.name.length] }
                                                springConfig={ presets.wobbly }
                                            />
                                        </h1>

                                        <div style={{color:'grey',width:'350px',fontWeight:'bold',marginBottom:'15%',marginTop:'15%'}}>
                                            <Typing>
                                                TechronX constantly advances to provide innovative IT solutions in order to make better future by improving your business.
                                            </Typing>                                        </div>
                                        <Button variant="contained" color="primary" style={{width:"200px",fontWeight:'bold',textDecoration:'none'}}   >
                                            <Link to="/contact" style={{textDecoration:'none',color:'white'}}>Contact US</Link>
                                        </Button>
                                    </div>
                                </Grid>



                            </div>



                    </Grid>




                    <Grid item xs={12} sm={6} style={{backgroundColor:'black',}}>

                        <div style={{alignSelf:'center',justifyContent:'center',display: 'flex',marginTop:'5%'}}>


                        <img src={intro} className="img-fluid" style={{alignSelf: 'center' ,width:'100%'}}
                               class="center"


                                />
                        </div>

                    </Grid>

                </Grid>





                <Grid container className="maindivB" style={{}}>



                    <Grid item xs={12} sm={6} style={{}}>

                        <div className="maindivBI" style={{alignSelf:'center',justifyContent:'center',display: 'flex',marginTop:'15%'}}>


                            <img src={play} className="img-fluid" style={{alignSelf: 'center' ,width:'100%'}}
                                 class="center"


                            />
                        </div>

                    </Grid>


                    <Grid item xs={12} sm={6} style={{alignSelf:'center',justifyContent:'center',display:'flex'}}>

                        <div className="maindivBI" style={{alignSelf:'center',justifyContent:'center',width:'50%'}}>

                            <h2>Let's get Acquainted..</h2>

                            <p style={{fontSize:'18px',}}>
                                TechronX is a team of passionate professionals, who love creating beautiful and high-valuable projects.
                                There is nothing better for us than seeing happy people, who enjoy using the products we create. If you would like to learn more about our team, cozy office and workflow, just follow the link below.
                            </p>

                        </div>

                    </Grid>






                </Grid>






















                <Grid container>



                <Grid item xs={12} s={12} >

                    <h1 style={{fontSize:"55px",marginLeft:'5%',padding:"5px",textDecoration: "underline double lightblue "}} >Our Services</h1>


                </Grid>
                </Grid>

                <Grid container>



                        <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >
                            <img src={service3} className="img-fluid" style={{width:undefined,height:undefined,alignItems:'center',justifyContent:'center',display:'flex'}} />

                        </Grid>


                        <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >


                            <div style={{width:'70%'}}>
                                <div style={{width:"100%",fontSize:'25px'}} >
                                    <TextTransition
                                        text={ "Custom "+TEXTS[i % TEXTS.length] +" Development"}
                                        springConfig={ presets.gentle }
                                    />

                                </div>

                            <p style={{color:'black'}}>We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the customer demands.
                                We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the customer demands.
                                We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the customer demands.   </p>
                                <div style={{}}>
                                    <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none',textAlign:'center'}}>View Solution</a>

                                </div>

                            </div>

                        </Grid>


                    </Grid>





                <Grid container>






                    <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >


                        <div style={{width:'70%'}}>

                            <div style={{width:"100%",fontSize:'25px'}} >
                                <TextTransition
                                    text={ "Custom "+TEXTS[i % TEXTS.length] +" Development"}
                                    springConfig={ presets.gentle }
                                />

                            </div>
                            <p style={{color:'black'}}>We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the customer demands.
                                We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the customer demands.   </p>
                            <div style={{}}>
                                <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none',textAlign:'center'}}>View Solution</a>

                            </div>

                        </div>

                    </Grid>


                    <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >
                        <img src={service2} className="img-fluid" style={{width:'80%',height:'80%',alignItems:'center',justifyContent:'center',display:'flex'}} />

                    </Grid>


                </Grid>

















                <Grid container>




                </Grid>

                <Grid container>



                    <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >
                        <img src={service6} className="img-fluid" style={{width:'80%',height:'80%',alignItems:'center',justifyContent:'center',display:'flex'}} />

                    </Grid>


                    <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >


                        <div style={{width:'70%'}}>
                            <div style={{width:"100%",fontSize:'25px'}} >
                                <TextTransition
                                    text={ "Custom "+TEXTS[i % TEXTS.length] +" Development"}
                                    springConfig={ presets.gentle }
                                />

                            </div>

                            <p style={{color:'black'}}>We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the custom
                                We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the custom
                                We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the customer demands.   </p>
                            <div style={{}}>
                                <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none',textAlign:'center'}}>View Solution</a>

                            </div>

                        </div>

                    </Grid>


                </Grid>


















                <Grid container>






                    <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}} >


                        <div style={{width:'70%'}}>
                            <div style={{width:"100%",fontSize:'25px'}} >
                                <TextTransition
                                    text={ "Custom "+TEXTS[i % TEXTS.length] +" Development"}
                                    springConfig={ presets.gentle }
                                />

                            </div>

                            <p style={{color:'black'}}>We have expertise in creating feature-rich online website.
                                We have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the custom
                                Realizing the true pottential of web applications and also realize the customWe have expertise in creating feature-rich online website. Realizing the true pottential of web applications and also realize the customer demands.   </p>
                            <div style={{}}>
                                <a href="#" style={{fontSize:"18px",color:'purple',textDecoration:'none',textAlign:'center'}}>View Solution</a>

                            </div>

                        </div>

                    </Grid>


                    <Grid item xs={12} sm={6} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >
                        <img src={service3} className="img-fluid" style={{width:undefined,height:undefined,alignItems:'center',justifyContent:'center',display:'flex'}} />

                    </Grid>


                </Grid>






                <Grid container className="maindivB" style={{backgroundColor:'black',marginTop:'10%'}}>



                    <Grid item xs={12} sm={6} style={{backgroundColor:'black',}}>

                        <div className="maindivBI" style={{alignSelf:'center',justifyContent:'center',display: 'flex',marginTop:'5%'}}>


                            <img src={familair} className="img-fluid" style={{alignSelf: 'center' ,width:'100%'}}
                                 class="center"


                            />
                        </div>

                    </Grid>


                    <Grid item xs={12} sm={6} style={{backgroundColor:'black',alignSelf:'center',justifyContent:'center',display:'flex'}}>

                        <div className="maindivBI" style={{alignSelf:'center',justifyContent:'center',marginTop:'5%',width:'50%'}}>

                            <h2 style={{color:'white'}}>Let's get Acquainted..</h2>

                            <p style={{fontSize:'18px',color:'white'}}>
                                TechronX is a team of passionate professionals, who love creating beautiful and high-valuable projects.
                                There is nothing better for us than seeing happy people, who enjoy using the products we create. If you would like to learn more about our team, cozy office and workflow, just follow the link below.
                            </p>

                        </div>

                    </Grid>






                </Grid>







                <Grid container className="maindivB" style={{backgroundColor:'white',boxShadow:'2px'}}>


                    <Container style={{ display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}>

                        <div style={{height:'600px',backgroundColor:'#d9d7e3',width:'50%'}}>

                            <div className="maindivcI">
                                <h2 style={{textAlign:'center'}}>Contact Us</h2>

                                <Container style={{ display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",height:'100px'}} >



                                    <TextField id="standard-search" label="Name" type="search" style={{width:'300px'}} />



                                </Container>

                                <Container style={{ display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",height:'200px'}} >



                                    <TextField id="standard-search" label="Email" type="Email" style={{width:'300px'}} />



                                </Container>

                                <Container style={{ display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",height:'100px'}} >



                                    <TextField id="standard-search" label="Telephone No." type="search" style={{width:'300px'}} />



                                </Container>

                            </div>

                        </div>


                    </Container>





                </Grid>




<BottomNavigator/>










            </div>

        )
    }
}