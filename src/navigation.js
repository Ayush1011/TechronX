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
import TextTransition, { presets } from "react-text-transition";
import intro from "./images/intro.gif"
import Image from "react-image-resizer";
import { Wave } from 'react-animated-text';
import Typing from 'react-typing-animation';
import {Link} from "react-router-dom";


export default class Navi extends React.Component{

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


    render() {
        return (
           <Grid container>
               <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>





                   <div style={{height:"50px",display: 'flex', justifyContent: 'center', alignSelf: 'center',}}>

                       <img src={tech} style={{height:'100%'}} />

                   </div>
               </Grid>
               <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>






               </Grid>


               <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>

                   <div style={{height:"50px",}}>


                       <h4 style={{color:"#fff",textDecoration:"none"}}>
                           <Link to='/' style={{color:"#fff",textDecoration:"none"}} >


                              Home
                           </Link>
                       </h4>
                   </div>




               </Grid>


               <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>





                   <div style={{height:"50px",}}>


                       <h4 style={{color:"#fff",textDecoration:"none"}}>
                           <Link to='/service' style={{color:"#fff",textDecoration:"none"}} >


                               Services
                           </Link>
                       </h4>
                   </div>
               </Grid>


               <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>





                   <div style={{height:"50px",}}>


                       <h4 style={{color:"#fff",textDecoration:"none"}}>
                           <Link to='/contact' style={{color:"#fff",textDecoration:"none"}} >


                           Contact us
                           </Link>
                       </h4>
                   </div>
               </Grid>


               <Grid item xs={12} sm={2} style={{backgroundColor:'black',height:"80px"}}>





                   <div style={{height:"50px",}}>


                       <h4 style={{color:"#fff",textDecoration:"none"}}>
                           <Link to='/home' style={{color:"#fff",textDecoration:"none"}} >


                               Blogs
                           </Link>
                       </h4>
                   </div>
               </Grid>



           </Grid>
        )
    }
}