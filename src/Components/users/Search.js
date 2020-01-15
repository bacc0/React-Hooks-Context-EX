import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers }) => {

      const [ text, setText ] = useState('');

      const onChange = (e) =>  setText(e.target.value);
      const onSubmit = (e) =>  { 
                  e.preventDefault(); 
                  searchUsers(text);
                  setText( '' );
      };
      

      return (
            <div>
                  <form onSubmit = {onSubmit} className = 'form'>
                        
                        <input type        = 'text' 
                               name        = 'text'
                               value       = { text }
                               onChange    = { onChange }
                               placeholder = 'Search Users...'
                        />
                                    
                        <input type      = 'submit'
                                    value     = 'Search'
                                    className = 'btn btn-dark btn-block'
                        />
                  </form>

                  { showClear &&    //  (&&) if that's TRUE show
                  
                        <button className = 'btn btn-light btn-block'
                                    onClick   = { clearUsers }>Clear</button>
                  }
            </div>
      )
}

Search.protoTypes = {
      searchUsers: PropTypes.func.isRequired,
      clearUsers : PropTypes.func.isRequired,
      showClear  : PropTypes.bool.isRequired
}

export default Search
