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
import {Container} from "@material-ui/core";
import './divs.css'
import TextTransition, {presets} from "react-text-transition";
import watsapp from './images/watsapp.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'

export default class BottomNavigator extends React.Component{

    constructor() {
        super();
    }


    render() {

        return(



            <Grid container className="slantedDivA" >






                <Grid item xs={12} sm={2} style={{alignItems:'center',justifyContent:'center',display:"flex",backgroundColor:'black'}}  >


                    <div style={{width:'70%'}}>

                        <div style={{width:"100%",fontSize:'25px'}} >


                        </div>


                    </div>

                </Grid>


                <Grid item xs={12} sm={3} style={{alignItems:'center',justifyContent:'flex-end',display:"flex",}}  >



                    <img src={logofoot} style={{height:150,width:200}}/>





                </Grid>



                <Grid item xs={12} sm={1} style={{alignItems:'center',justifyContent:'center',display:"flex",backgroundColor:'black'}}>



                    <div style={{width:'70%'}}>

                        <div style={{width:"100%",fontSize:'15px'}} >

                            <ul style={{listStyleType:'none',}}>
                                <li style={{fontWeight:'bold',margin: '0 0 3px 0'}}>
                                    Home
                                </li>
                                <li style={{margin: '0 0 3px 0'}}>
                                    About
                                </li>
                                <li style={{margin: '0 0 3px 0'}}>
                                    Services
                                </li>
                                <li style={{margin: '0 0 3px 0'}}>
                                    Contact
                                </li>

                            </ul>



                        </div>


                    </div>





                </Grid>




                <Grid item xs={12} sm={2} style={{alignItems:'center',justifyContent:'flex-start',display:"flex",backgroundColor:'black'}}  >
                    <div style={{width:'70%'}}>

                        <div style={{width:"100%",fontSize:'15px'}} >





                            <ul id="menu" style={{listStyleType:'none',}}>
                                <li style={{fontWeight:'bold',margin: '0 0 3px 0'}}>

                                </li>
                                <li style={{marginRight:'3px'}}>
                                    <img src={watsapp} style={{width:'50px',height:'40px'}}/>
                                </li>
                                <li style={{marginRight:'3px'}}>
                                    <img src={facebook} style={{width:'50px',height:'50px'}}/>

                                </li>
                                <li style={{marginRight:'3px'}}>
                                    <img src={twitter} style={{width:'40px',height:'40px'}}/>

                                </li>

                            </ul>



                        </div>


                    </div>



                </Grid>


                <Grid item xs={12} sm={3} style={{alignItems:'center',justifyContent:'center',display:"flex"}}  >


                </Grid>


            </Grid>



        )
    }

}