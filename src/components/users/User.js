import React, { Component } from 'react'

class User extends Component {

      componentDidMount () {
            this.props.getUser(this.props.match.params.login);
      };

      render() {
           
            const { 
                  bio,
                  name,
                  blog,
                  login,
                  hireable,
                  location,
                  html_url,
                  followers,
                  following,
                  avatar_url,
                  public_repos,
                  public_gists

                  } = this.props.user;

            const { loading } = this.props;
           

            return (
                  <div>
                      {name}
                  </div>
            )
      }
}

export default User
