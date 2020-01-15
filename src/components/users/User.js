import React, { Fragment, useEffect } from 'react';
import { Link }  from 'react-router-dom';
import PropTypes from 'prop-types'


const User = ({ user, getUser, match }) => {

      useEffect(() => {
            getUser( match.params.login );

            //eslint-disable-next-line
      }, [] );
      
      const { bio,
              blog,
              name,
              company,
              html_url,
              hireable,
              location,
              avatar_url } = user;

      return (
            <Fragment>
                  <Link to = '/' className = 'btn btn-light' >Back to Search</Link>

                  Hireable: {' '}
                  { hireable ? <span className = 'text-success'>YES</span>  
                              : <span className = 'text-danger' >NOT</span> }

                  <div className = 'card grid-2'>
                        <div className = 'all-center'>

                              <img  src = {avatar_url} 
                                    className = 'round-img' 
                                    alt       ='avatar'
                                    style     = {{ width: '125px'}}
                              />
                              <h1>{name}</h1>
                              <p>{location}</p>
                        </div> 
                        <div>
                              {bio && <Fragment>
                                          <h3>Bio</h3>
                                          <p>{bio}</p>
                                          </Fragment>}
                              <a href = { html_url} className = 'btn btn-dark my-1' target = 'blank'> 
                                    Visit Github Profile
                              </a>
                              <ul>
                                    <li>
                                          {blog && <Fragment>
                                                Website: <strong>{blog}</strong>
                                                      </Fragment>}
                                    </li>
                                    <li>
                                          {company && <Fragment>
                                                Company: <strong>{company}</strong>
                                                      </Fragment>}
                                    </li>
                              </ul>
                        </div>
                  </div>  

            </Fragment>
      )
}

User.protoTypes = {
      user    : PropTypes.object.isRequired,
      getUser : PropTypes.func.isRequired
};


export default User
