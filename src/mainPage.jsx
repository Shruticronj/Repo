import React, {Component} from 'react';
import './mainPage.css';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class MainPage extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className='grad' style={{width:'1350px',height:'700px'}}>
                    <h1 style={{color:'white'}}>Upcoming Sessions</h1>
                    <h3 style={{color:'white'}}>This line contains information about 25 day schedule programme.</h3>
                    <div className='inner-box'>
                        <div style={{color:'orange'}}>
                    <h3>Aug</h3>
                    <h3>27</h3>
                    </div>
                    <div style={{borderLeft:'2px solid silver',height:'100px'}}>
                    <span>6 - 7PM <h3>Black</h3></span>

                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MainPage;