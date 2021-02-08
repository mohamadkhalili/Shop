import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Slideshow from './../../Components/SlideShow/Slideshow'
import Banner from './../../Components/Banner/Banner'
import List_card_main from './../../Components/List_cards_main/List_card_main'
import List_article from './../../Components/List_article/List_article'
import data1 from './../../Data_examples/Card_data.json'
import data2 from './../../Data_examples/Article_list_data.json'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_list: ''
        };
    }
    async componentDidMount() {
        const url = "http://192.168.114.6:8000/post_list/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({product_list: data})
    }
    render() {
        return (
            <div>
                <Slideshow maxWidth={this.props.maxWidth} time={10000}/>
                <Banner maxWidth={this.props.maxWidth}/>
                <List_card_main items={data1} maxWidth={this.props.maxWidth}/>
                {/* <div> */}
                    <div
                        className="card_article"
                        style={{
                            maxWidth: this.props.maxWidth
                        }}>
                        <div>
                            <span>مطالب پیشنهادی</span>
                        </div>
                        <List_article items={this.state.product_list}/>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
