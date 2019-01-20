import React, {Component} from "react";
import { ShootList } from "../components";

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