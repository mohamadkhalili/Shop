import React, {Component} from 'react'
import './Menu.sass'
import {Link } from "react-router-dom";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_list: '',
            post_list: '',
            isLoaded: false
        };
    }
    async componentDidMount() {
        const url = "http://192.168.114.6:8000/post_cat_list/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({post_list: data})
        const url_product = "http://192.168.114.6:8000/product_cat_list/";
        const response_product = await fetch(url_product);
        const data_product = await response_product.json();
        this.setState({product_list: data_product})
    }


    render() {
        return (
            <nav className="menu">
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
                                        
                                        this.state.post_list
                                            ? (this.state.post_list.map((item, index) => (
                                                <li key={index} >
                                                    <Link id={index} to={"/post_category" + item.cat_url} >{item.category}</Link>
                                                </li>
                                            )))
                                            : ''
                                    }
                                </ul>
                            </li>
                            <li>
                                <Link to="/products">محصولات</Link>
                                <ul>
                                    {
                                        
                                        this.state.product_list
                                            ? (this.state.product_list.map((item, index) => (
                                                <li key={index} >
                                                    <Link id={index} to={"/product_category" + item.cat_url} >{item.category}</Link>
                                                </li>
                                            )))
                                            : ''
                                    }
                                </ul>
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
            </nav>
        )
    }
}
