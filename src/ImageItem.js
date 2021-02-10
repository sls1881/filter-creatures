import React from 'react'

//Creating the singular image to render when mapping
export default class ImageItem extends React.Component {
    render() {
        return (<li key={this.props.title}>
            <h2>Name: {this.props.title}</h2>
            <img alt={this.props.title} src={this.props.image} />
            <p>Description: {this.props.description}</p>
            <p>Horns: {this.props.horns}</p>
        </li>);
    }
}