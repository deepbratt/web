import React,{ Component} from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
require ('react-bootstrap');

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            isLoggedIn: false
        }
    }

    onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name] : value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, userPassword } = this.state;

        this.setState({ loading: true }, () => {    
            axios.post("http://localhost:4000/api/users/auth", { email, userPassword } )
            .then(result => {          
                    this.setState({
                        loading: false,
                        isLoggedIn: !result.data ? false : true,
                        userData: result.data._id         
                    })
                }   
            );
        });
    }

    finalLogin = () => {
        const cookies = new Cookies();
        cookies.remove("Token");
        cookies.set("Token", this.state.userData);
    
        if(cookies.get('Token')){
          return <Redirect to = "/dashboard" />;
        }
    }

    render(){
        const {isLoggedIn} = this.state;
        if(isLoggedIn){
            return this.finalLogin();
        }
        console.log(this.state.isLoggedIn);
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 center">
                        <div className="jumbotron">
                            
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" name="userPassword" className="form-control" id="exampleInputPassword1" onChange={this.onChange} />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button> <a href="/signup" style={{float:"right"}} className="mt-2"> Create a new account </a>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 center">
                        <div className="jumbotron">
                        <h3 className="display-5"> You're in Login page </h3>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}