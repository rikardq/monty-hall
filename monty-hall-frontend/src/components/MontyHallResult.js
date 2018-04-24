import React, {Component} from "react";
import './MontyHallResult.css';

export default class MontyHallResult extends Component {

    renderResult = (result, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.numberOfLosses}</td>
                <td>{result.numberOfWins}</td>
                <td>{result.gameStrategy}</td>
                <td>{result.numberOfSimulations}</td>
                <td>{result.winPercentage}</td>
            </tr>
        );
    };

    render() {
        const results = this.props.results;
        return (
            <div className="MontyHallResult">
                <h1>Results</h1>
                <table>
                    <tr>
                        <th>Run</th>
                        <th>Losses</th>
                        <th>Wins</th>
                        <th>Strategy</th>
                        <th>simulations</th>
                        <th>Win percentage</th>
                    </tr>
                    {results.map((result, index) => this.renderResult(result, index))}
                </table>

            </div>
        );
    }
}