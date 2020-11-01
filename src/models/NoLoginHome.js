import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import Auth from "./Auth";
import {reactLocalStorage} from 'reactjs-localstorage';
import HomeAva from '../images/music5.svg'

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

export default class NoLoginHome extends React.Component{

    constructor() {
        super();
        this.state={
            width1:null,
            fontSizes:90,
            modalOpen:false
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
        },1000)

    }


    render() {
        return(

            <div style={{marginTop:'7%'}}>


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

                <Grid container spacing={5}>

                    <Grid item xs={12} sm={6}>

                        <Grid xs={12} sm={12} style={{minHeight:'10px'}}>
                            <text style={{
                                fontSize:this.state.fontSizes,
                                fontFamily:'roboto'
                            }}>
                                Where good ideas find you
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

                            <Button variant="contained" style={{backgroundColor:'#ee4c4d',fontWeight:'bold',color:'#fff'}} onClick={()=>this.setState({modalOpen:true})}>
                               Get Started
                            </Button>


                        </Grid>

                    </Grid>



                    <Grid item xs={12} sm={6}>
                        <div style={{height:'300px',width:'100%',}}>



                        <img src={HomeAva} style={{height:undefined,width:'100%'}}/>
                        </div>

                    </Grid>

                </Grid>


            </div>
        )
    }
}