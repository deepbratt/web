import React,{Component} from 'react';
require ('react-bootstrap');
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 center">
                        <div className="jumbotron">
                            
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button> <a href="/signup" style={{float:"right"}} className="mt-2"> Create a new account </a>
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