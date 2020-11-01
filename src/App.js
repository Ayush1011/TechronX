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
import Homepage from './homepage'
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import homepage from "./homepage1";
import BottomNavigator from "./bottomNavigator";
import Navi from './navigation'
import Contact from "./contactus";
import Aboutjs from "./aboutjs";
import Services from "./Services";
import HomeScreen from "./models/HomeScreen";
import Auth from "./models/Auth";
import Upgrade from "./models/update";

export default class App extends  React.Component{


  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }






  render(){





    return(



        <div style={{width:'auto',
         }}>


    <Router>
      <div>
      <switch>
      <Route path="/" exact component={homepage}/>
      <Route path="/bottom" exact component={BottomNavigator}/>
        <Route path="/nav" exact component={Navi}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/about" exact component={Aboutjs}/>
        <Route path="/service" exact component={Services}/>
        <Route path="/home" exact component={HomeScreen}/>

        <Route path="/auth" exact component={Auth}/>

        <Route path="/upgrade" exact component={Upgrade}/>


      </switch>
      </div>
    </Router>






        </div>
    )
  }
}


