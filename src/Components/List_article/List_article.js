import React, {Component} from 'react'
import Article_card from './../Article_card/Article_card'
import './List_article.sass'

export default class List_article extends Component {
    render() {
        return (

            <ul className="list_card_article">
                {
                    this.props.items
                        ? this
                            .props
                            .items
                            .map((item, index) => (<Article_card key={index} data={item}/>))
                        : ''
                }
            </ul>

        )
    }
}
