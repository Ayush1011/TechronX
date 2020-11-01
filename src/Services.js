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
import contact from './images/contact.png'
import serviceup1 from './images/serviceup1.png'
import serviceup2 from './images/servicesup2.png'
import serviceup3 from './images/servicesup3.png'
import serviceup4 from './images/servicesup4.png'
import serviceup5 from './images/servicesup5.png'
import serviceup6 from './images/servicesup6.png'
import serviceup7 from './images/servicesup7.png'






import BottomNavigator from "./bottomNavigator";
export default class Servies extends React.Component{


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
            <div >
                {this.state.width1<=1420?
                    <div></div>
                    :
                    <Navi/>
                }

                <Grid container className="maindivA" style={{ height:this.state.height,marginBottom:'10%' }}>
                    <Grid item xs={6} s={6}>

                        <div style={{backgroundColor:'black',width:'100%',display:'flex'}}>





                            <Grid container s={6} xs={12}>
                                <div style={{marginLeft:'10%',marginTop:'15%'}}>
                                    <h1 style={{color:'white',}}>
                                        Our Services

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
                <h1 style={{textAlign:'center'}} >How Do We Work?</h1>

                <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>



                <Grid container  style={{}}>




                    <Grid item xs={12} sm={6}>

                    <h2>Hear the client out</h2>
                      <p style={{color:'grey'}}>
                          The first stage is estimating our customer's needs. Here you share your plans and problems with
                          us and we help you find the best way to realize them. This is the fundamental part, so we will ask a lot of questions and dig into the issue you are going to solve.
                      </p>

                  </Grid>
                    <Grid item xs={12} sm={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                        <img src={serviceup1} style={{height:200,width:300}} />

                    </Grid>




                </Grid>


                </Container>



                <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>



                    <Grid container  style={{backgroundColor:'white',}}>

                        <Grid item xs={12} sm={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                            <img src={serviceup2} style={{height:200,width:300}} />

                        </Grid>


                        <Grid item xs={12} sm={6}>



                            <h2>Assemble the team</h2>
                            <p style={{color:'grey'}}>
                                We provide the services of the highest
                                quality, that is why we gather the strongest team of true professionals and enthusiasts to work on your project. The environment inside our IT company keeps them as productive as possible. Our team works according to Agile methodology and connects through top applications like Jira and Slack for uninterrupted communication and smooth workflow.
                            </p>

                        </Grid>





                    </Grid>


                </Container>








                <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>



                    <Grid container  style={{backgroundColor:'white',}}>




                        <Grid item xs={12} sm={6}>

                            <h2>Do the paper work</h2>
                            <p style={{color:'grey'}}>
                                A stage of planning, scope estimation, and requirements approvement. Every project should have a technical requirement agreed, as a way of confirmation that we understood each other. Here we dig into technical details and find the best way to make your idea a reality.
                            </p>

                        </Grid>
                        <Grid item xs={12} sm={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                            <img src={serviceup3} style={{height:200,width:300}} />

                        </Grid>




                    </Grid>


                </Container>





                <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>



                    <Grid container  style={{backgroundColor:'white',}}>

                        <Grid item xs={12} sm={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                            <img src={serviceup4} style={{height:200,width:300}} />

                        </Grid>


                        <Grid item xs={12} sm={6}>



                            <h2>Design & Develop</h2>
                            <p style={{color:'grey'}}>
                                This is the part where a project comes to life. Our creative minds design the interface and experience, for your users to adore it. After design, it’s a time of development, where our top technical performers make a project work as planned.
                            </p>

                        </Grid>





                    </Grid>


                </Container>

                <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>



                    <Grid container  style={{backgroundColor:'white',}}>




                        <Grid item xs={12} sm={6}>

                            <h2>Test and iterate</h2>
                            <p style={{color:'grey'}}>
                                Check yourself before you wreck yourself. Testing is critical before release, here we check our work, to make sure everything works well and meets our customer’s needs.
                            </p>

                        </Grid>
                        <Grid item xs={12} sm={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                            <img src={serviceup5} style={{height:200,width:300}} />

                        </Grid>




                    </Grid>


                </Container>

                <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>



                    <Grid container  style={{backgroundColor:'white',}}>

                        <Grid item xs={12} sm={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                            <img src={serviceup6} style={{height:200,width:300}} />

                        </Grid>


                        <Grid item xs={12} sm={6}>



                            <h2>Launch the project</h2>
                            <p style={{color:'grey'}}>
                                This is the moment it all started for. It is important to make project launch successful both from technical and marketing side. With a help of our specialists, your “ship” will float without any trouble.
                            </p>

                        </Grid>





                    </Grid>


                </Container>


                <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>



                    <Grid container  style={{backgroundColor:'white',marginBottom:'5%'}}>




                        <Grid item xs={12} sm={6}>

                            <h2>Support & Update</h2>
                            <p style={{color:'grey'}}>
                                We are more than interested to go with your company into a bright future. Our IT company will support your project on the go and fix issues ASAP. If you want to add some new feature - just tell us, we will work on it going through stages.
                            </p>

                        </Grid>
                        <Grid item xs={12} sm={6} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                            <img src={serviceup7} style={{height:200,width:300}} />

                        </Grid>




                    </Grid>


                </Container>


                <BottomNavigator/>


            </div>
        )
    }
}