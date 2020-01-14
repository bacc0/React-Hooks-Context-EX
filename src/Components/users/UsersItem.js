import React    from 'react';
import { Link } from 'react-router-dom';


const UsersItem = (props) => {

      const { avatar_url, login, html_url } = props.user;

      return (
            <div className ='card text-center'>
                  <img  src = { avatar_url }  
                        alt = ''
                        className = 'round-img' 
                        style = {{ width:  '60px' }}/>

<                 h3>{ login }</h3>

                  <div>
                        <Link to = {`/user/${login}`}
                              // target    = 'blank' 
                              className = 'btn btn-dark btn-sm my-1'>
                              More
                        </Link>
                  </div>
            </div>
      )
}

export default UsersItem
