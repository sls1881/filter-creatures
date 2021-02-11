import React from 'react'

export default class Dropdown extends React.Component {
    render() {
        return (
            //create options drop-down
            <select value={this.props.currentValue}
                onChange={this.props.handleChange}>
                {
                    this.props.options.map(option =>
                        <option key={option} value={option}> {option}</option>)
                }
            </select>
        )
    }
} 