import React, {Fragment, useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies ();

export default function AddPosts () {
    const token = useState (cookies.get ('Token'));
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(post);
        /*this.setState({ loading: true }, () => {    
            axios.post("http://localhost:4000/api/users/auth", { email, userPassword } )
            .then(result => {          
                    this.setState({
                        loading: false,
                        isLoggedIn: !result.data ? false : true,
                        userData: result.data._id         
                    })
                }   
            );
        });*/
    }
 
    const handleChange = (event) => {
        setPost(event.target.value);
    }
    const titleChange = (event) => {
        setTitle(event.target.value);
    }
  return (
    <Fragment>
            <form>
                <div
                    className="media mt-3"
                    key={1}
                    style={{border: '1px solid #CCC'}}
                >
                    <div className="media-body" style={{padding:5}}>
                        <h5
                            className="mt-0"
                            style={{
                            borderBottom: '1px solid #CCC',
                            background: '#fafafa',
                            padding: 10,
                            }}
                        >
                            Add Posts
                        </h5>
                        <input type="text" onChange={titleChange} placeholder=" Enter title of your post" style={{width:"100%"}}/>
                        <textarea style={{width:"100%"}} placeholder="whats on your mind?" onChange={handleChange} className="mt-1"></textarea>
                        <button type="button" className="btn btn-primary mb-1" onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </form>
    </Fragment>
  );
}
