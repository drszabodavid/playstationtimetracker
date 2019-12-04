import React, {Component} from "react";
import Games from "./components/games";
import Header from "./components/header";
import Search from "./components/search";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import NotFound from "./components/notFound";
import {Route, Switch} from "react-router-dom";
import "./App.css"

class App extends Component {
    state = {};

    componentDidMount() {
        const user = localStorage.getItem("userId");
        this.setState({ user });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="appclass">
                <Header user={user} />
                <Switch>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/games" component={Games}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Route path="/" exact component={Search}/>
                    <Route path="/logout" component={Logout}/>
                </Switch>
            </div>
        );
    }
}

export default App;
