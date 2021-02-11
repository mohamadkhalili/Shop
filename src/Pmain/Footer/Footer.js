import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Footer.sass'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div
                    style={{
                        maxWidth: this.props.maxWidth
                    }}>
                    <div>
                        <span>
                            تماس با ما
                        </span>
                        <ul>
                            <li>
                                +98 9102330621
                            </li>
                            <li>
                                +98 9102330621
                            </li>
                            <li>
                                contact@mrgol.ir
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li className="title">
                            خدمات مشتریان
                        </li>
                        <li>
                            <Link>مراحل ثبت سفارش</Link>
                        </li>
                        <li>
                            <Link>نحوه ثبت پروژه</Link>
                        </li>
                        <li>
                            <Link>کاربران ویژه</Link>
                        </li>
                    </ul>
                    <ul>
                    <li className="title">
                            <Link>با سایت ما</Link>
                        </li>
                        <li>
                            <Link>آموزش و مقاله ها</Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}
