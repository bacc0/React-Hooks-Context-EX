import React, { Component } from 'react'

export class Search extends Component {

     state = {
         text : ''
     }

     onChange = (e) => {
            this.setState({
                  text: e.target.value
            })
            console.log(this.state.text);
     }

      render() {
            return (
                  <div>
                        <form className = 'form'>
                              <input type        = 'text' 
                                     name        = 'text'
                                     value       =  { this.state.text }
                                     onChange    =  { this.onChange }
                                     placeholder = 'Search Users...'
                              />
                                       
                              <input type      = 'submit'
                                     value     = 'Search'
                                     className = 'btn btn-dark btn-block'
                              />
                        </form>
                  </div>
            )
      }
}

export default Search
