import axios from 'axios';
import React, { Component } from 'react';

const fetchURL = 'https://jsonplaceholder.typicode.com/todos/1'

class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.buttonClickHandle = this.buttonClickHandle.bind(this)
  }

  componentDidMount() {
    axios.get(fetchURL)
      .then((response) => console.log(response.data))
      .catch((error) => console.error('GET DATA ERROR: ', error.message))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ', prevProps)
    console.log('prevState: ', prevState)
    console.log('current count value: ', this.state.count)
  }

  componentWillUnmount() {
    console.log('component will be destroy')
  }

  shouldComponentUpdate() {
    return this.state.count % 2 !== 0
  }

  buttonClickHandle = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <p>class component example with counter: {count}</p>
        <button onClick={this.buttonClickHandle}>increment counter</button>
      </div>
    );
  }
}

export default LifeCycleClassComponent;
