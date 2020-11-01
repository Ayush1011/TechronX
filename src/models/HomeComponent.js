import React,{useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '../images/avatar.webp'
import NavBar from "./NavBar";


var SampleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat felis ut laoreet eleifend. Etiam pulvinar sollicitudin tristique. Morbi in sem in est tincidunt aliquet ut quis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nibh, a aliquam dolor. Suspendisse potenti. Cras sodales nisl sed magna molestie cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit sapien fringilla ligula feugiat dapibus.\n" +
    "\n" +
    "                                        Donec eu lorem eget mi imperdiet euismod. In in consequat dolor, sit amet scelerisque lorem. Aliquam nec condimentum odio. Ut hendrerit at ante et elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent suscipit libero sit amet orci varius, in ullamcorper ipsum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dignissim erat, sit amet consectetur arcu. Quisque pretium auctor dui, ut malesuada magna ultrices fringilla. Sed ligula nisl, convallis in tortor fringilla, imperdiet vestibulum risus. Aenean cursus neque enim, sit amet volutpat tellus faucibus eget.\n" +
    "\n" +
    "                                        Sed hendrerit tempor justo eget lacinia. Cras a volutpat"

export default class HomeComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            HomeData:[],
            FirstData:[],
            width:"100",
            width1:0,
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
                        this.setState({

                            FirstData:this.state.HomeData[0]


                        })

                        console.log(this.state.HomeData[0].url)

                    }

                )



            )
    }

    FindWidth=()=>{
        this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px',width1:window.innerWidth});



    }


    componentDidMount() {
        this.FindWidth()
        this.FetchData()

    }

    render() {
        return(
            <div style={{marginTop:'7%'}}>
                <Container >

                    <Grid justify="space-between" container style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>


                        <Grid justify="space-between"  container xs={12} sm={8} style={{minHeight:"100px",width:'100%',}}>

                            <Grid spacing={2} item xs={12} sm={5} style={{width:'100%',}}>
                                <div style={{height:"300px",width:"100%"}}>
                                    <img src={this.state.FirstData.url} style={{height:'100%',width:'100%'}} />
                                </div>


                                <div style={{marginTop:'3%'}} >
                                    <text style={{fontWeight:'bold',fontSize:'20px'}}>
                                        {this.state.FirstData.title}
                                    </text>

                                </div>



                                <div  style={{height:"200px",width:"100%"}} >
                                    <text  style={{fontSize:'20px'}}>
                                        {SampleText.slice(0,150)}........
                                    </text>

                                </div>



                            </Grid>

                            <Grid xs={12} item sm={6} style={{width:'100%',}}>



                                <div>


                                    {this.state.HomeData.slice(1,4).map(post => {
                                        const { _id, title, content,url } = post;
                                        return (
                                            <div key={_id} style={{height:"100%",width:'100%',}}>


                                                <Grid justify="space-between" spacing={2}  container>



                                                    <Grid item xs={8} sm={8}>


                                                        <h3 style={{fontWeight:'bold'}}>{title.slice(1,10)}</h3>
                                                        <p>{title}</p>
                                                        <h4>9 sep,2018</h4>


                                                    </Grid>

                                                    <Grid item xs={4} sm={4} style={{display:'flex',justifyContent:'center',alignSelf:'center',}}>
                                                        <img src={url} style={{height:'100px',width:'100%',}} />


                                                    </Grid>



                                                </Grid>






                                            </div>
                                        );
                                    })}


                                </div>


                            </Grid>



                        </Grid>






                        <Grid  item xs={12} sm={1} >
                        </Grid>

                        <Grid  item xs={12} sm={3}   >




                            <div style={{width:'100%',minHeight:'10px',}}>

                                <h4>CREATORS TO FOLLOW</h4>


                                {this.state.HomeData.slice(1,4).map(post => {
                                    const { _id, title, content,url } = post;
                                    return (
                                        <div key={_id} style={{height:"100%",width:'100%',marginBottom:'4%'}}>

                                <Grid container  >

                                    <Grid item xs={3} sm={3} >
                                        <div style={{height:'60px',width:'60px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50px'}}>

                                            <img src={url} style={{height:"60px",width:'60px',borderRadius:'50px'}}/>


                                        </div>
                                    </Grid>
                                        <Grid item xs={5} sm={5} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'5px'}}>


                                                <text style={{textAlign:'center'}}>{title.slice(1,10)}</text>

                                            </div>
                                        </Grid>
                                            <Grid item xs={4} sm={4} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

                                                    <div style={{height:'40px',width:'90%',display:'flex',justifyContent:'center',alignItems:'center',border: '1px solid black',borderRadius: '15px',}}>
                                                        Follow
                                                    </div>


                                            </Grid>





                                </Grid>
                                        </div>
                                    );
                                })}

                            </div>










                        </Grid>





                    </Grid>

















                </Container>
            </div>
        )
    }
}