import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal_signup.sass'

export default class Modal_signup extends Component {
    onClickdisable(e) {
        e.stopPropagation();
    }
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="backdrop" onClick={this.props.onClose}>
                <div className="modal" onClick={e => this.onClickdisable(e)}>
                    <div>
                        <input placeholder="ایمیل یا شماره تلفن را وارد کنید" type="text"/>
                        <input placeholder="کلمه عبور خود را وارد کنید" type="password"/>
                    </div>
                    <div className="footer_modal" >
                        <button onClick={this.props.onClose}>
                            انصراف
                        </button>
                        <button onClick={this.props.onClose}>
                            ثبت نام
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal_signup.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node

}
