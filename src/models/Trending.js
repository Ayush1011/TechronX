import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'
import NavBar from "./NavBar";

import FlatList from 'flatlist-react';


export default class Trending extends React.Component{

    constructor() {
        super();
        this.state={
            HomeData:[],
            grid:true

        }
    }


    FindWidth=()=>{
        this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px',width1:window.innerWidth});



    }

    FetchData=()=>{
        var api="https://jsonplaceholder.typicode.com/photos"


        fetch(api)

            .then((res)=>res.json()



                .then(
                    data => {
                        this.setState({
                            HomeData: data,


                        })



                    }

                )



            )
    }




    renderPerson = (person, idx) => {
        return (
            <div key={idx} >

                <Grid container style={{height:'150px',width:'300px',display:'flex',alignItems:'center'}}>
                    <Grid item xs={2} sm={2} >
                        <text style={{color:'#c1c1c1',fontWeight:'bold',fontSize:'40px'}}>0{person.id}</text>

                    </Grid>
                    <Grid container sm={10} xs={10}  style={{height:'40px',display:'flex',alignItems:'center'}}>

                        <Grid item xs={2} sm={2} style={{display:'flex',alignItems:'center'}}>
                            <img src={person.url} style={{height:"30px",width:'30px',borderRadius:'50px'}}/>

                        </Grid>
                        <Grid item xs={8} sm={8} style={{display:'flex',alignItems:'center'}}>
                            <text style={{fontWeight:'bold'}}>{person.title.slice(1,10)}</text>

                        </Grid>


                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sm={2}>


                        </Grid>

                        <Grid item xs={10} sm={10} style={{height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}>

                            <text style={{fontWeight:'bold'}}>
                                {person.title}
                            </text>


                        </Grid>



                    </Grid>

                    <Grid container>
                        <Grid item xs={2} sm={2}>


                        </Grid>

                        <Grid item xs={10} sm={10} style={{height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}>

                            <text style={{}}>
                                {person.title}
                            </text>


                        </Grid>



                    </Grid>

                </Grid>
            </div>
        );
    }


    componentDidMount() {
        this.FetchData()

        this.FindWidth()
        setInterval(()=>{
            this.FindWidth()
            if(this.state.width1<=600)
            {

                this.setState({grid:false})
            }else{
                this.setState({grid:true})

            }

        },100)
    }


    render() {
        return(
            <div style={{marginTop:'7%'}}>

                <Container>



                    <Grid container>


                        <h3>TRENDING ON MEDIUM</h3>
                        <Grid item xs={12} sm={12} style={{minHeight:'10px',width:'100%'}}>

                            <div>





                                <FlatList
                                    list={this.state.HomeData.slice(0,6)}
                                    renderItem={this.renderPerson}
                                    display={{
                                        grid:this.state.grid,
                                        gridGap:"15%",
                                        ColumnWidth:"100%",
                                        row: true,


                                    }}
                                    renderWhenEmpty={() => <div>List is empty!</div>}

                                />

                            </div>
                        </Grid>

                    </Grid>
                </Container>

            </div>
        )
    }
}