import React, {Component} from 'react'
import Card_default_border from './../Card_default_border/Card_default_border'
import './List_card_main.sass'

export default class List_card_main extends Component {
    render() {
        return (

            <ul className="list_card_main">
                {
                    this.props.items
                        ? this
                            .props
                            .items
                            .map((item, index) => (<Card_default_border key={index} data={item}/>))
                        : ''
                }
            </ul>
        )
    }
}
