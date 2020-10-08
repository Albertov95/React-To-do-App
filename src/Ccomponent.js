import React, { Component } from 'react'
import './stylesNew.css';
import { Button } from '@material-ui/core';



export default class Ccomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        })
    }

    render() {
        return (
            <div>
                <h1 className="hello">Welcome</h1>
                <Button variant="contained" color="primary">
                    Blue
                </Button>
                <Button variant="contained" color="secondary">
                    Pink
                </Button>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button className="top" type="submit">Submit</button>
                </form>
                <h3>{this.state.submit}</h3>
            </div>
        )
    }
}

