import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {GrNext, GrPrevious} from 'react-icons/gr';
import { Link } from 'react-router-dom'
import {validatePropTypes, propTypes, getProps} from './Props'
import './Slideshow.sass'
import img1 from './1.webp'
import img2 from './2.webp'
import img3 from './3.webp'
import img4 from './4.webp'
import img5 from './5.webp'

export default class Slideshow extends Component {

    constructor(props) {
        super(props);

        this.onClickpage = this
            .onClickpage
            .bind(this);
        this.numbers = [1, 2, 3, 4, 5];
        this.images = [img1,img2,img3,img4,img5];
        this.links = ["/slide1","/slide2","slide3","slide4","slide5"];
        this.state = {
            current: 0
        };

    }

    componentDidMount() {
        const {time} = getProps(this.props);
        this.timerId = setInterval(() => {
            this.setState(state => ({
                ...state,
                current: (state.current + 1) % this.numbers.length

            }));
        }, time);

    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onClickpage(e , value) {
        this.setState({
            current: value - 1
        });
        this.componentWillUnmount();
        this.componentDidMount();
    }

    onclicknext() {
        this.setState(state => ({
            current: (state.current + 1) % this.numbers.length
        }));
        this.componentWillUnmount();
        this.componentDidMount();
    }

    onclickprevious() {
        if (this.state.current - 1 >= 0) 
            this.setState(state => ({
                current: (state.current - 1)
            }));
        else 
            this.setState(state => ({
                current: this.numbers.length - 1
            }));
        this.componentWillUnmount();
        this.componentDidMount();
    }

    render() {

        return (
                <ul className="side_main" style={{maxWidth: this.props.maxWidth}}>
                    {
                        this
                            .numbers
                            .map((number, index) => (
                                <li
                                    key={number}
                                    className={index === this.state.current
                                        ? 'slide showing'
                                        : 'slide'}>
                                            <img className="div_img" src={this.images[number-1]}/>
                                            {index === this.state.current
                                        ? <Link to={this.links[number-1]} className="links"></Link>
                                        : ""}
                                            
                                    
                                </li>
                            ))
                    }
                    <div className="dots">
                        <div>
                            {
                                this
                                    .numbers
                                    .map((number, index) => (
                                        <span
                                            key={number}
                                            onClick={e => this.onClickpage(e, number)}
                                            className={index === this.state.current
                                                ? 'dot enable'
                                                : 'dot'}></span>
                                    ))
                            }
                        </div>
                    </div>
                    <span className="next_btn" >
                        <GrNext onClick={() => this.onclicknext()} className="next_ic"/>
                    </span>
                    <span className="previous_btn" onClick={() => this.onclickprevious()}>
                        <GrPrevious className="previous_ic"/>
                    </span>

                </ul>
        )
    }
}