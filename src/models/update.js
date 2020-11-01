import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from "firebase";
import {reactLocalStorage} from 'reactjs-localstorage';
import upgrade from '../images/upgrade.png'
import HomeAva from "../images/music5.svg";
import NavBar from "./NavBar";
import Modal from "react-modal";
import Auth from "./Auth";



const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};


export default class Upgrade extends React.Component{

    constructor() {
        super();
        this.state={
            width1:null,
            fontSizes:70,
            isLogin:false,
            modalOpen:false,
        }
    }
    FindWidth=()=>{
        this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px',width1:window.innerWidth});

        if(this.state.width1<=412)
        {
            this.setState({fontSizes:40})
        }

    }
    componentDidMount() {
        setInterval(()=>{
            this.FindWidth()
            this.setState({isLogin:reactLocalStorage.get('isLogin',false)})
        },1000)



    }

    render() {
        return(
            <div>

                <Modal
                    isOpen={this.state.modalOpen}
                    style={customStyles}
                    onRequestClose={!this.state.modalOpen}

                    contentLabel="Example Modal"
                >
                    <div style={{width:'100%',height:'400px'}}>

                        <a style={{position:"absolute",right:5,top:0}} onClick={()=>{this.setState({modalOpen:false})}}>X</a>

                        <Auth/>
                    </div>

                </Modal>

                <Container>

            <NavBar/>
                <Grid container >
                    <Grid xs={12} sm={6}>
                        <div style={{height:'300px',width:'100%',}}>



                            <img src={upgrade} style={{height:undefined,width:'100%'}}/>
                        </div>

                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Grid xs={12} sm={12} style={{minHeight:'10px'}}>
                            <text style={{
                                fontSize:this.state.fontSizes,
                                fontFamily:'roboto',

                            }}>
                                Upgrade to find customization content!
                            </text>

                        </Grid>
                        <Grid xs={12} sm={12} style={{minHeight:'10px',marginTop:'5%'}}>

                            {this.state.width1<=412?
                                null
                                :
                                <text style={{
                                    fontSize:'25px',
                                    fontFamily:'roboto'
                                }}>
                                    Read and share new perspectives on just about any topic. Everyone’s welcome.
                                </text>
                            }


                        </Grid>

                        <Grid xs={12} sm={12} style={{minHeight:'10px',marginTop:'10%'}}>


                            {this.state.isLogin===true?
                                <Button variant="contained" style={{backgroundColor:'#ee4c4d',fontWeight:'bold',color:'#fff'}} >
                                    Upgrade
                                </Button>

                            :
                                <Button variant="contained" style={{backgroundColor:'#ee4c4d',fontWeight:'bold',color:'#fff'}} onClick={()=>this.setState({modalOpen:true})}>
                                    Login
                                </Button>
                            }



                        </Grid>



                    </Grid>
                </Grid>
                </Container>

            </div>
        )
    }
}