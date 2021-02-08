import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Card_default_border.sass'
import {CgUnavailable} from "react-icons/cg";
import {AiOutlineCheck, AiFillStar} from "react-icons/ai";

export default class Card_default_border extends Component {

    render() {
        function goodprice(param) {
            var gprice = "";
            var i = 0
            while (param >= 10) {
                i++;
                switch (param % 10) {
                    case 0:
                        gprice = "٠" + gprice + "";
                        break;
                    case 1:
                        gprice = "١" + gprice + "";
                        break;
                    case 2:
                        gprice = "٢" + gprice + "";
                        break;
                    case 3:
                        gprice = "٣" + gprice + "";
                        break;
                    case 4:
                        gprice = "٤" + gprice + "";
                        break;
                    case 5:
                        gprice = "٥" + gprice + "";
                        break;
                    case 6:
                        gprice = "٦" + gprice + "";
                        break;
                    case 7:
                        gprice = "٧" + gprice + "";
                        break;
                    case 8:
                        gprice = "٨" + gprice + "";
                        break;
                    case 9:
                        gprice = "٩" + gprice + "";
                        break;
                    default:
                        break;
                }
                // gprice = (param % 10) + gprice + "";
                param = Math.floor(param / 10);
                if (i == 3) {
                    gprice = "," + gprice;
                    i = 0;
                }
            }
            switch (param % 10) {
                case 0:
                    gprice = "٠" + gprice + "";
                    break;
                case 1:
                    gprice = "١" + gprice + "";
                    break;
                case 2:
                    gprice = "٢" + gprice + "";
                    break;
                case 3:
                    gprice = "٣" + gprice + "";
                    break;
                case 4:
                    gprice = "٤" + gprice + "";
                    break;
                case 5:
                    gprice = "٥" + gprice + "";
                    break;
                case 6:
                    gprice = "٦" + gprice + "";
                    break;
                case 7:
                    gprice = "٧" + gprice + "";
                    break;
                case 8:
                    gprice = "٨" + gprice + "";
                    break;
                case 9:
                    gprice = "٩" + gprice + "";
                    break;
                default:
                    break;
            }
            return gprice ;
        }
        return (
            <li className="card_border">
                <div>
                    <Link className="link" to={this.props.data.link}></Link>
                    <img className="img" src={this.props.data.img}/>
                    <span className="title">{this.props.data.title}</span>
                    <div>
                        <span className="available">
                            {
                                this.props.data.available === true
                                    ? <AiOutlineCheck className="check"/>
                                    : <CgUnavailable className="unavailable"/>
                            }
                            {
                                this.props.data.available === true
                                    ? 'موجود'
                                    : 'ناموجود'
                            }</span>
                        <span className="rank">{this.props.data.rank}
                            <AiFillStar className="star"/></span>
                    </div>
                    <span className="price">{
                            this.props.data.price === -1
                                ? <Link to="/contact_shop">لطفا تماس بگیرید.</Link>
                                : goodprice(this.props.data.price) + " تومان"
                        }</span>
                </div>
            </li>
        )
    }
}
