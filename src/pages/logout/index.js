import React,{ Component} from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
require ('react-bootstrap');
const cookies = new Cookies();

export default class Logout extends Component{
    constructor(props){
        super(props);
        cookies.remove("Token");
    }

    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12 center">
                        <div className="jumbotron">
                        <h3 className="display-5"> You've succesfully loggedout </h3>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                            <p>click here to <a href="/login" alt="login" >Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}