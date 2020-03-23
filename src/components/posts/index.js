import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';

export default function Posts () {
  const [userData, setUserData] = useState ('');
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    if (userData === '' || userData === undefined) {
      axios.get ('http://localhost:4000/api/posts').then (result => {
        setUserData (result.data);
        setLoading (false);
      });
    }
  });

  console.log (userData);
  return (
    <Fragment>
      {loading
        ? <p>your data is fetching....</p>
        : userData.map ((data, index) => {
            return (
              <div
                className="media mt-3"
                key={index}
                style={{border: '1px solid #CCC'}}
              >
                <div className="media-body">
                  <h5
                    className="mt-0"
                    style={{
                      borderBottom: '1px solid #CCC',
                      background: '#fafafa',
                      padding: 10,
                    }}
                  >
                    {data.title}

                    <span style={{fontSize: 13, float: 'right'}}>
                      {' '}- {data.userId.firstName} {data.userId.lastName}
                    </span>

                  </h5>
                  <p style={{padding: 10}}>{data.description}</p>
                </div>
              </div>
            );
          })}
    </Fragment>
  );
}
