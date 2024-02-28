import axios from 'axios';
import React, { Component } from 'react';

const fetchURL = 'https://jsonplaceholder.typicode.com/todos'

class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      data: {}
    }
  }

  fetchData = async () => {
    try {
      const request = await axios.get(`${fetchURL}/${this.state.count}`)
      console.log('CC: get data', request.data)
      this.setState({ data: request.data })
    } catch (error) {
      console.error('CC: get data error: ', error.message)
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CC: prevProps: ', prevProps)
    console.log('CC: prevState: ', prevState)
    console.log('CC: current count value: ', this.state.count)
  }

  componentWillUnmount() {
    console.log('CC: component will be destroy')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0
  }

  buttonClickHandle = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.fetchData()
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
