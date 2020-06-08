import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Credits extends Component {
    constructor () {
        super();
        this.state = {
            credits: {
                description: "",
                amount: "",
                date: "",
            }
        };
    }

    componentDidMount() {
        axios
        .get("https://moj-api.herokuapp.com/credits")
        .then((response) => {
            const data = response.data;
            this.setState({credits: data});
        })
    }
    render() {
        let display= (
            this.props.credits.map(data => {
                return (
                <div>
                    <ul>
                        <li>Description: {data.description}</li>
                        <li>Amount: {data.amount}</li>
                        <li>Date: {data.date}</li>
                    </ul>
                </div>
                )
            })
        )
        return (
            <div>
                <h1>Credits</h1>
                <Link to="/">Home</Link>
                <div>{display}</div>
            </div>
        )
    }
}

export default Credits