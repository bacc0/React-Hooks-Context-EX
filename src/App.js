import React, { Fragment, Component } from "react";
import { BrowserRouter 
           as Router, Switch, Route } from 'react-router-dom';

import axios  from 'axios';
import Users  from './components/users/Users';
import About  from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';

import "./App.css";

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
        
        const { users, loading} = this.state;

        return (
            <Router>
                <div className="App">
                    <Navbar title = 'Github Finder'/>
                    <div className = 'container'>
                        <Switch>
                            <Route exact path = '/'
                                render = { props => (
                                    <Fragment>
                                        <Search searchUsers = { this.searchUsers } 
                                                clearUsers  = { this.clearUsers }
                                                showClear   = { users.length > 0 ? true : false}/>
                
                                        <Users  loading     = { loading } 
                                                users       = { users } /> 

                                    </Fragment>
                                )} 
                            />

                            <Route exact path = '/about' component = {About} />
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
