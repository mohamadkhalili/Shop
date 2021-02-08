import React, {Component} from 'react'
import history from "./history"
import Modal_signin from './../Components/Modal_signin/Modal_signin'
import Modal_signup from './../Components/Modal_signup/Modal_signup'
import './Pmain.sass'
import {Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Header from './/Header/Header'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'
import Home from './../Pages/Home/Home'
import Post from './../Pages/Post/Post'
import Products from './../Pages/Products/Products'
import Contact from './../Pages/Contact/Contact'
import About from './../Pages/About/About'
import Notfound from './../Pages/Notfound/Notfound'

export default class Pmain extends Component {
    constructor(props) {
        super(props);
        this.togglesignin = this
            .togglesignin
            .bind(this);
        this.togglesignup = this
            .togglesignup
            .bind(this);
        this.state = {
            isOpenSignin: false,
            isOpenSignup: false
        };
    }

    togglesignin() {
        this.setState({
            isOpenSignin: !this.state.isOpenSignin
        });
        if (this.state.isOpenSignin) 
            document.body.style.overflow = 'unset';
        else 
            document.body.style.overflow = 'hidden';
        }
    togglesignup() {
        this.setState({
            isOpenSignup: !this.state.isOpenSignup
        });
        if (this.state.isOpenSignup) 
            document.body.style.overflow = 'unset';
        else 
            document.body.style.overflow = 'hidden';
        }
    render() {
        const maxWidth = "1200px"
        return (
            <BrowserRouter history={history}>
                <div
                    className={this.state.isOpen === true
                        ? "pmain open"
                        : "pmain"}>
                    <Header
                        maxWidth={maxWidth}
                        open_modal_signin={this.togglesignin}
                        open_modal_signup={this.togglesignup}/>
                    <Menu maxWidth={maxWidth}/>
                    <Switch>
                        <Route exact path="/">
                            <Home maxWidth={maxWidth}/>
                        </Route>
                        <Route exact path="/post" key={1}>
                            <Post maxWidth={maxWidth}/>
                        </Route>
                        <Route exact path="/post_category/:id/:title" key={2} render={props => <Post {...props} maxWidth={maxWidth}/>} />
                        <Route exact path="/products" key={1}>
                            <Products maxWidth={maxWidth}/>
                        </Route>
                        <Route exact path="/product_category/:id/:title" key={2} render={props => <Products {...props} maxWidth={maxWidth}/>} />
                        <Route exact path="/contact">
                            <Contact maxWidth={maxWidth}/>
                        </Route>
                        <Route exact path="/about">
                            <About maxWidth={maxWidth}/>
                        </Route>
                        <Route>
                            <Notfound maxWidth={maxWidth}/>
                        </Route>
                    </Switch>
                    <Footer maxWidth={maxWidth}/>
                </div>
                <Modal_signin show={this.state.isOpenSignin} onClose={this.togglesignin}>
                    Here's some content for the modal
                </Modal_signin>
                <Modal_signup show={this.state.isOpenSignup} onClose={this.togglesignup}>
                    Here's some content for the modal
                </Modal_signup>
            </BrowserRouter>
        )
    };
};
