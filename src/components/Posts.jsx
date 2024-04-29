import React, { Component } from "react";
import axios from "axios";

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false
  }

  componentDidMount(){
    axios.get('https://livewellcmr.com/wp-json/wp/v2/posts')
    .then().catch();
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default Posts