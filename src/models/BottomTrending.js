import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'
import NavBar from "./NavBar";
import HomeComponent from "./HomeComponent";
import Trending from "./Trending";

import FlatList from "flatlist-react";


export default class BottomTrending extends React.Component{

    constructor() {
        super();
        this.state={
            HomeData:[]

        }
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

                        console.log(data)



                    }

                )



            )
    }

    renderPerson = (person, idx) => {
        return (
            <div key={person.id} style={{height: "100%", width: '100%',}}>


                <Grid justify="space-between" spacing={2} container>


                    <Grid item xs={8} sm={8}>


                        <h3 style={{fontWeight: 'bold'}}>{person.title.slice(1, 10)}</h3>
                        <p>{person.title}</p>
                        <h4>9 sep,2018</h4>


                    </Grid>

                    <Grid item xs={4} sm={3} style={{display: 'flex', justifyContent: 'center', alignSelf: 'center',}}>
                        <img src={person.url} style={{height: '100px', width: '100%',}}/>


                    </Grid>


                </Grid>
            </div>
        )
    }





    componentDidMount() {

        this.FetchData()
    }


    render() {
        return(
            <div style={{marginTop:'20%'}}>

                <Container>

                    <h3>TRENDING ON Virtusa</h3>

                    <Grid container>
                        <Grid xs={12} sm={8} style={{}}>

                            <FlatList
                                list={this.state.HomeData}
                                renderOnScroll={true}
                                hasMoreItems={true}
                                limit={50}
                                renderItem={this.renderPerson}
                                display={{
                                    grid:this.state.grid,
                                    gridGap:"15%",
                                    ColumnWidth:"100%",
                                    row: true,



                                }}
                                paginationLoadingIndicator={<div style={{background: '#090'}}>Getting more items...</div>}
                                renderWhenEmpty={() => <div>List is empty!</div>}

                            />

                        </Grid>
                        <Grid xs={0} sm={4}>

                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }

}