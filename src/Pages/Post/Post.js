import React, {Component} from 'react'
import List_article from './../../Components/List_article/List_article'
import './Post.sass'

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_list: null,
            previd: null
        };
    }
    async componentDidMount() {
        var address = window.location.pathname;
        address = address.split("/");
        address = address.filter(x => x !== "")
        var url = "http://192.168.114.6:8000/";
        if (address[0] == "post_category") 
            url += "post_cat_detail/" + address[1] + "/" + address[2] + "/";
        else 
            url += "post_list/";
        
        const response = await fetch(url);
        const data = await response.json();
        this.setState({post_list: data})
    }
    async componentDidUpdate(){
        if(this.props.match && this.props.match.params.id != this.state.previd ){
            var address = window.location.pathname;
            address = address.split("/");
            address = address.filter(x => x !== "")
            var url = "http://192.168.114.6:8000/";
            if (address[0] == "post_category") 
                url += "post_cat_detail/" + address[1] + "/" + address[2] + "/";
            else 
                url += "post_list/";
            
            const response = await fetch(url);
            const data = await response.json();
            this.setState({post_list: data})
            this.setState({
                previd: this.props.match.params.id
            })
        }
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    render() {
        return (
            <article
                className="post"
                style={{
                    maxWidth: this.props.maxWidth
                }}>
                <List_article items={this.state.post_list}/>
            </article>
        )
    }
}
