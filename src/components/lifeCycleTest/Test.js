import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  
  componentDidMount() {
    console.log('Component did mount life cycle...');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
      title: data.title,
      body: data.body
    }));
  }

  // UNSAFE_componentWillMount() {
  //   console.log("Component called before did mount...");
  // }

  componentDidUpdate() {
    console.log("Component will run when it updates...");
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(' getSnapshotBeforeUpdate...');
  // }

  render() {
    const {title, body} = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;
