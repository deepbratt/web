import React, {useEffect, useState, Fragment} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies ();

export default function Sidebar () {
  const [userData, setUserData] = useState ('');
  const token = useState (cookies.get ('Token'));
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    if (userData === '' || userData === undefined) {
      axios
        .post ('http://localhost:4000/api/users/getuser', {token})
        .then (result => {
          setUserData (result.data);
          setLoading (false);
        });
    }
  });

  //console.log (userData);
  return (
    <Fragment>
      {loading
        ? <p>your data is fetching....</p>
        : <div className="col-md-4 center">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-header">
                My Profile
                <span />
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {userData.firstName} {userData.lastName}
                </li>
                <li className="list-group-item"> {userData.email} </li>
                <li className="list-group-item"> {userData.firstName} </li>
                <li className="list-group-item">
                  <span href="#/" alt="logout" className="btn btn-primary">
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
      }
    </Fragment>
  );
}
