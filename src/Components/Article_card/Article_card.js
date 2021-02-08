import React, {Component} from 'react'
import './Article_card.sass'
import {Link} from 'react-router-dom'

export default class Article_card extends Component {
    render() {
        const unixTime = this.props.data.published_date;
        const date = new Date(unixTime*1000);
        return (
            
            <li className="acrticle_card">
                <div>
                    <div>
                        <Link className="link_img" to={this.props.data.url}><img className="img" src={this.props.data.image_icon}/></Link>
                        <div>
                            <Link to={this.props.data.category} className="category">{this.props.data.category.category}</Link>
                            <Link to={this.props.data.url} className="title">{this.props.data.title}</Link>
                            <span className="date_time">{date.toLocaleString("fa-IR")}</span>
                            <span className="subtitle">{this.props.data.brief_description}</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
