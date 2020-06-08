import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Debits extends Component {
    constructor () {
        super();
        this.state = {
            debits: {
                description: "",
                amount: "",
                date: "",
            }
        };
    }

    componentDidMount() {
        axios
        .get("https://moj-api.herokuapp.com/debits")
        .then((response) => {
            const data = response.data;
            this.setState({debits: data});
        })
    }
    render() {
        let display= (
            this.state.debits.map(data => {
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
                <h1>Debits</h1>
                <Link to="/">Home</Link>
                <div>{display}</div>
            </div>
        )
    }
}

export default Debits