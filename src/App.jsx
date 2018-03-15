import './App.css'

import { Button, Form, FormControl } from 'react-bootstrap'
import React, { Component } from 'react'

import Clock from './Clock'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'Dec. 25, 2018',
            newDeadline: ''
        }
    }
    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline
        })
    }
    render() {
        return (<div className='App'>
            <div className='App-title'>
                Countdown to {this.state.deadline}</div>
            <Clock deadline={this.state.deadline} />
            <Form inline className='center-block'>
                <FormControl
                    className='Deadline-input'
                    placeholder='New date' onChange={event => { this.setState({ newDeadline: event.target.value }) }} />
                <Button onClick={() => this.changeDeadline()}>Submit</Button>
            </Form>
        </div>)
    }
}
export default App  