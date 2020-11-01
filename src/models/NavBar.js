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



export default class NavBar extends React.Component{

    constructor() {
        super();
        this.state={
            Dayhour:" ",
            height:"100",
            width:"100",
            width1:0,
            fontSizes:"0px",
            modalOpen:false
        }

    }

    FindDay=()=>{
        const Hour= new Date()

        console.log(Hour.getHours())
        if(Hour.getHours()>=5 && Hour.getHours()<=12)
        {
            this.setState({Dayhour:"Good Morning"})

        }else if(Hour.getHours()>12&&Hour.getHours()<16)
        {
            this.setState({Dayhour:"Good AfterNoon"})

        }else if(Hour.getHours()>=16&&Hour.getHours()<21)
        {
            this.setState({Dayhour:"Good Evening"})


        }
        else if(Hour.getHours()>21)
        {
            this.setState({Dayhour:"Happy Night"})


        }
        else if(Hour.getHours()<5)
        {
            this.setState({Dayhour:"Happy Night"})


        }
    }


   closeModal=()=>{
       this.setState({modalOpen:false})
   }


    FindWidth=()=>{
        this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px',width1:window.innerWidth});

        if(this.state.width1<=1420)
        {
            this.setState({fontSizes:"20px"})
        }
    }


    componentDidMount() {
        this.FindDay()

    }

    render() {
        const styles = {
            border: '1px solid rgba(0, 0, 0, 0.05)',
        };
        return(
            <div>

                <Container>



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

                    <Grid container style={{marginTop:'5%'}}>
                        <Grid item xs={12} sm={8} style={{height:'100px'}}>

                            <div style={{ textDecorationLine: "none",}}>
                                <Link to={'/'} style={{ textDecorationLine: "none",}}>


                                <text style={{fontSize:'40px',fontFamily:'roboto',fontWeight:'bold',textDecorationLine: "none",color:'black'}}>
                                        TechronX|
                                </text>
                                <text style={{fontSize:'20px',fontFamily:'roboto',fontWeight:'bold',textDecorationLine: "none",color:'black'}}>
                                    {this.state.Dayhour}
                                </text>
                                </Link>

                            </div>

                        </Grid>
                        <Grid container xs={12} sm={4} style={{height:'50px',display:"flex",}}>


                            <Grid container xs={6} sm={8} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>


                                <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:"flex-end",alignSelf:'center',}}>
                                    <div>
                                        <text style={{fontWeight:'bold'}}>{reactLocalStorage.get('name', "Hola Developer")}</text>
                                    </div>


                                </Grid>
                                <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>

                                    <div style={{height:'50px',width:'50px',display:'flex',justifyContent:'center',alignItems:'center',}} onClick={()=>{this.setState({modalOpen:true})}} >


                                        <img src={reactLocalStorage.get('profilepic', "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png")} style={{height:"50px",width:'50px',borderRadius:'500px'}}/>



                                    </div>
                                </Grid>

                            </Grid>
                            <Grid item xs={6} sm={4} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>


                                <div style={{height:'50px',width:'100px',display:'flex',justifyContent:'center',alignItems:'center',border: '1px solid black',borderRadius: '15px'}}>
                                    <Link to='/upgrade' style={{textDecoration:"none",color:'#111'}} >
                                    Upgrade
                                    </Link>
                                </div>

                            </Grid>





                        </Grid>
                    </Grid>











                </Container>

            </div>
        )
    }

}