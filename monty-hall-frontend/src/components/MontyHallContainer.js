import React, {Component} from 'react';
import axios from "axios/index";
import {DEFAULT_ITERATIONS, STRATEGY_SWITCH} from "../constants";
import MontyHallForm from "./MontyHallForm";
import MontyHallResult from "./MontyHallResult";
import './MontyHallContainer.css';


export default class MontyHallContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            results: []
        };
    }

    startSimulate = async ({strategy = STRATEGY_SWITCH, iterations = DEFAULT_ITERATIONS}) => {
        try {
            this.setState({loading: true});
            const response = await axios.get(`simulate`, {params: {strategy, iterations}});
            if (response.status === 200) {
                this.setState({loading: false, error: false, results: [...this.state.results, response.data]});

            } else {
                this.setState({loading: false, error: true});
            }
        } catch (error) {
            console.error('Error on request ' + error);
            this.setState({loading: false, error: true});
        }
    };

    submitCallback = (params) => {
        // noinspection JSIgnoredPromiseFromCall
        this.startSimulate(params);
    };

    render() {
        return (
            <div className="MontyHallContainer">
                {this.state.error && <h1 className="error">ERROR FROM SERVER :(</h1>}
                <MontyHallForm
                    loading={this.state.loading}
                    submitCallback={this.submitCallback}
                />
                <MontyHallResult
                    results={this.state.results}
                />
            </div>
        );
    }
}