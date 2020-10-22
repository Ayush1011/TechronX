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
import logofoot from './images/logofooter.png'
import {Container,TextField} from "@material-ui/core";
import './divs.css'
import TextTransition, {presets} from "react-text-transition";
import Navi from "./navigation";
import Typing from "react-typing-animation";
import intro from "./images/intro.gif";
import contact from './images/contact.png'
export default class Contact extends React.Component{


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
        return(
            <div>
                {this.state.width1<=1420?
                    <div></div>
                    :
                    <Navi/>
                }

                <Grid container className="maindivA" style={{ height:this.state.height, }}>
                    <Grid item xs={6} s={6}>

                        <div style={{backgroundColor:'black',width:'100%',display:'flex'}}>





                            <Grid container s={6} xs={12}>
                                <div style={{marginLeft:'10%',marginTop:'15%'}}>
                                    <h1 style={{color:'white',}}>
                                       Contact Us
                                    </h1>


                                    <div style={{color:'grey',width:'350px',fontWeight:'bold',marginBottom:'15%',marginTop:'15%'}}>
                                        <Typing>
                                            TechronX constantly advances to provide innovative IT solutions in order to make better future by improving your business.
                                        </Typing>                                        </div>

                                </div>
                            </Grid>



                        </div>



                    </Grid>




                    <Grid item xs={12} sm={6} style={{backgroundColor:'black',}}>

                        <div style={{alignSelf:'center',justifyContent:'center',display: 'flex',marginTop:'5%'}}>


                            <img src={contact} className="img-fluid" style={{alignSelf: 'center' ,width:'100%'}}
                                 class="center"


                            />
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


            </div>
        )
    }
}