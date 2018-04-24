import React, {Component} from "react";
import {DEFAULT_ITERATIONS, STRATEGY_KEEP, STRATEGY_RANDOM, STRATEGY_SWITCH} from "../constants";
import './MontyHallForm.css';

export default class MontyHallForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            strategy: STRATEGY_SWITCH,
            iterations: DEFAULT_ITERATIONS
        };
    }

    handleSelectChange = (event) => {
        this.setState({strategy: event.target.value});
    };

    handleInputChange = (event) => {
        this.setState({iterations: event.target.value});
    };

    handleSubmit = (event) => {
        this.props.submitCallback(this.state);
        event.preventDefault();
    };

    render() {
        const loading = this.props.loading;
        return (
            <div className="MontyHallForm">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="strategy">Pick your strategy:</label>
                    <select id="strategy" disabled={ loading } value={this.state.strategy} onChange={this.handleSelectChange}>
                        <option value={STRATEGY_SWITCH}>Switch door</option>
                        <option value={STRATEGY_KEEP}>Keep door</option>
                        <option value={STRATEGY_RANDOM}>Random switch or keep</option>
                    </select>
                <label htmlFor="iterations">Pick number of iterations</label>
                    <input
                        disabled={loading}
                        id="iterations"
                        type="number"
                        min="1"
                        max="100000"
                        value={this.state.iterations}
                        onChange={this.handleInputChange}/>
                <input disabled={loading} type="submit" value="Start simulation"/>
            </form>
            </div>
        );
    }
}
