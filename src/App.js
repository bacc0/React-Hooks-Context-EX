import React, { Component } from "react";
import "./App.css";
import Navbar from './Components/layout/Navbar';
import Users  from './Components/users/Users';
import Search from './Components/users/Search';
import axios  from 'axios';

const USER = 'd811de7f78bffecfed6c';
const PASS = '5783819d291da5b5ee8fed8a42f9900dd57d8760';

class App extends Component {
    state = {
        loading: false,
        users  : []  
    }
    async componentDidMount () {

        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users?client_id=
            ${USER}
                &client_secret=
            ${PASS}`);

        this.setState({
            users  : res.data,
            loading: false
        })
    }

    searchUsers = async ( text ) => {

        if (text === '') {
            this.componentDidMount();
        };

        this.setState({ loading: true });
        
        const res = await axios.get(`https://api.github.com/search/users?q=
            ${text}
                &client_id=
            ${USER}
                &client_secret=
            ${PASS}`);

        this.setState({
            users  : res.data.items,
            loading: false
        })
    }

    clearUsers = () => {
        this.setState({
            users  : [],
            loading: false
        })

    }


    render() {
        return (
            <div className="App">
                <Navbar title = 'Github Finder'/>
                <div className = 'container'>

                    <Search searchUsers = { this.searchUsers } 
                            clearUsers  = { this.clearUsers }
                            showClear   = { this.state.users.length > 0  ?  true  :  false}/>

                    <Users  loading     = { this.state.loading } 
                            users       = { this.state.users } /> 
                </div>
            </div>
        );
    }
}

export default App;
