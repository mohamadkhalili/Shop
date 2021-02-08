import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Banner.sass'
import Banner_img from './banner1.webp'

export default class Banner extends Component {
    render() {
        return (
            <div
                className="banner"
                style={{
                    maxWidth: this.props.maxWidth
                }}>
                <img src={Banner_img} className="banner_img"/>
                <div className="banner_border">
                <div className="blur">

                    <Link to="/banner_1" className="links"></Link>
                    <p className="banner_txt">همه چیز دباره ی گل های باغی</p>

                </div>

                </div>
            </div>
        )
    }
}
