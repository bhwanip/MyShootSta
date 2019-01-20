import React, {Component} from "react";
import { ShootList } from "../components";

/*const STATIC_DATA = [
    {
        "uuid" : 1,
        "url": "https://cdn.filestackcontent.com/dWbyg4oUQBVH8Rznqkfl",
        "title": "A day at Work",
        "editor": "Sam"
    },
    {
        "uuid" : 1,
        "url": "https://cdn.filestackcontent.com/0d83iq6TNa4OS5WPBHlE",
        "title": "Scooping Icecream",
        "editor": "Bethany"
    }
]*/

export default class ShootListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {videos: []};
    }

   async componentDidMount(){
        let response = await fetch('/api/videos');
        let videos = await response.json();
        this.setState({
            ...this.state,
            videos
        }); 
    }

    render() {
        return (
            <main className = "container" id = "container">
                <ShootList {...this.state}/>
            </main>
        )
    }
}