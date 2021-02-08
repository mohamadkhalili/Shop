import React, {Component} from 'react'
import './Menu.sass'
// import {Link} from 'react-router-dom'
import history from "./../history"
// import { Route , withRouter} from 'react-router-dom';
import {Router, withRouter , Switch, Route, Link , NavLink} from "react-router-dom";
import data from './../../Data_examples/Menu_teach.json'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.setLocation =this.setLocation.bind(this);
        this.state = {
            product_list: '',
            isLoaded: false
        };
    }
    async componentDidMount() {
        const url = "http://192.168.114.6:8000/post_cat_list/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({product_list: data})
    }

    setLocation(value) {

            history
            .push(value);
            history.key= value
    }

    render() {
        return (
            <div className="menu">
                <div
                    className="menu_inner"
                    style={{
                        maxWidth: this.props.maxWidth
                    }}>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">خانه</Link>
                            </li>
                            <li>
                                <Link to="/post">
                                    آموزش
                                </Link>
                                <ul>
                                    {
                                        
                                        this.state.product_list
                                            ? (this.state.product_list.map((item, index) => (
                                                <li key={index} >
                                                    <NavLink id={index} to={"/post_category" + item.cat_url} onClick={e => this.setLocation("/post_category" + item.cat_url)}>{item.category}</NavLink>
                                                </li>
                                            )))
                                            : ''
                                    }
                                </ul>
                            </li>
                            <li>
                                <Link to="/products">محصولات</Link>
                            </li>
                            <li>
                                <Link to="/relation">مناسبت ها</Link>
                            </li>
                            <li>
                                <Link to="/contact">تماس با ما</Link>
                            </li>
                            <li>
                                <Link to="/about">درباره ما</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
