import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from "firebase";
import {reactLocalStorage} from 'reactjs-localstorage';



firebase.initializeApp({
    apiKey: "AIzaSyBcSTHR2sLskPDhp66smJMYDeEscmRH3i0",
    authDomain: "virtusa-58806.firebaseapp.com",
    databaseURL: "https://virtusa-58806.firebaseio.com",
    projectId: "virtusa-58806",
    storageBucket: "virtusa-58806.appspot.com",
    messagingSenderId: "11411039831",
    appId: "1:11411039831:web:37be29ed3502a0877da512",
    measurementId: "G-NQ8FZR3CXZ"
})


export default class Auth extends React.Component{
    constructor() {
        super();
        this.state={
            isSignedIn:false
        }
    }



    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isSignedIn:!!user})
        })

    }


    saveData=(name,profile)=>{



    }
    clearData=()=>{
        reactLocalStorage.remove('name');
        reactLocalStorage.remove('profilepic');
        reactLocalStorage.remove('isLogin');
    }
    refreshPage=()=> {
        console.log("Clicked");
        window.location.reload();
    }


    render() {
        return(
            <div className="App">
                {this.state.isSignedIn ? (



                    <span>


                        {/*sorry*/}
                        <p style={{fontSize:'0px'}}>
                            {reactLocalStorage.set('name', firebase.auth().currentUser.displayName)}


                            {reactLocalStorage.set('profilepic',firebase.auth().currentUser.photoURL)}
                            {reactLocalStorage.set('isLogin',true)}
                            {()=>this.refreshPage()}
                        </p>

                        {/*sorry*/}








                        <Button variant="outlined" color="primary" onClick={() => {
                            firebase.auth().signOut();this.clearData()
                        }}>
                            Sign out!
                        </Button>

            <h3>Welcome {firebase.auth().currentUser.displayName}</h3>



            <img
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
                style={{borderRadius:'100px'}}
            />

          </span>
                ) : (


                    <div>

                    <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}

                    />
                        {()=>{
                            this.saveData(firebase.auth().currentUser.displayName,firebase.auth().currentUser.photoURL)
                        }}

                    </div>

                )}
            </div>
        )
    }
}