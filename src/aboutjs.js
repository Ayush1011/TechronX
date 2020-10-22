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
import Navi from "./navigation";
import Typing from "react-typing-animation";
import intro from "./images/intro.gif";
import about from './images/about.png'
import contact from './images/contact.png'
import BottomNavigator from "./bottomNavigator";
import aboutus2 from './images/aboutus2.png'
export default class Aboutjs extends React.Component{


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
                                        About Us
                                    </h1>


                                    <div style={{color:'grey',width:'350px',fontWeight:'bold',marginBottom:'15%',marginTop:'15%'}}>
                                        <Typing>
                                            From start to finish, we offer excellent product solutions.
                                        </Typing>                                        </div>

                                </div>
                            </Grid>



                        </div>



                    </Grid>




                    <Grid item xs={12} sm={6} style={{backgroundColor:'black',}}>

                        <div style={{alignSelf:'center',justifyContent:'center',display: 'flex',marginTop:'5%'}}>


                            <img src={about} className="img-fluid" style={{alignSelf: 'center' ,width:'100%'}}
                                 class="center"


                            />
                        </div>

                    </Grid>

                </Grid>











                <Grid container className="maindivc" style={{backgroundColor:'white',height:300}}>


                    <Container className="maindivcI">

                        <div style={{width:'90%'}}>


                        <h1 style={{color:"grey"}}>Hi there</h1>
                        <h3 style={{color:"grey"}}>
                            It’s TechronX team, we want to share our story with you. Our company was founded with a mission to help businesses achieve their goals with IT solutions and solve market problems. We are going toward the big goal - build an amazing business backed by future technologies and goal-oriented people to satisfy our customers' expectations.
                        </h3>
                        </div>

                    </Container>






                </Grid>

                <Container className="maindivcI" style={{}} >

                <Grid container className="maindivc" style={{height:500,width:'100%',}}>



                       <Grid item xs={12} sm={6}>
                           <p style={{color:'#c6c6c6'}}>
                               Our main differentiation is that we are an outsourcing company. which works as a product one. It means that we invest most effort and money into team education and office, to create a rocket-productive team and work on fewer but more challenging projects. Our employees have the best work tools, custom environment, that were made especially for them, not to mention lessons and places for rest. We hire top performers that love their job and have a fire in the eyes.
                           </p>
                       </Grid>

                    <Grid item xs={12} sm={6} style={{}}>

                        <div style={{alignSelf:'center',justifyContent:'center',display: 'flex',}}>


                            <img src={aboutus2} className="img-fluid" style={{height:400,width:400}}



                            />
                        </div>

                    </Grid>







                </Grid>
                </Container>



                <BottomNavigator/>


            </div>
        )
    }
}