import React,{Component} from 'react';
import axios from 'axios';
require ('react-bootstrap');

export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }

    onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name] : value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, phone, email, userPassword } = this.state;

        this.setState({ loading: true }, () => {    
            axios.post("http://localhost:4000/api/users", { firstName, lastName, phone, email, userPassword } )
            .then(result => this.setState({
                    loading: false,
                    isSignedUp: true       
                })
            );
        });
    }
    
    render(){
        const {loading, isSignedUp} = this.state;
        return(
            <>
            {
                loading 
                ? 
                    <div>
                        <p>loading..</p>
                    </div>
                : 
                    ''
            }
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 center">
                        <div className="jumbotron">
                            {
                                isSignedUp
                                ?
                                <>
                                    <div>
                                        <p>You have successfully signedup</p>
                                        <p> <a href="/login"> Click here to login </a></p>
                                    </div>
                                </>
                                :
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" name="firstName" className="form-control" onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" name="lastName" className="form-control" onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" name="phone" className="form-control" onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" name="email" className="form-control" aria-describedby="emailHelp" onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="userPassword" className="form-control" onChange={this.onChange} />
                                    </div>
                                    <button type="button" onClick={this.onSubmit} className="btn btn-primary">Submit</button> 
                                    <a href="/login" style={{float:"right"}} className="mt-2"> Login </a>
                                </form>
                            }
                           
                        </div>
                    </div>
                    <div className="col-md-6 center">
                        <div className="jumbotron">
                            <h3 className="display-5"> You're in Signup page </h3>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}