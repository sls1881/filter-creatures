import React from 'react'

//Creating the singular image to render when mapping
export default class ImageItem extends React.Component {
    render() {
        return (<li key={this.props.description}>
            <h3>Name: {this.props.title}</h3>
            <p>{this.props.description}</p>
            <p>Horns: {this.props.horns}</p>
            <img alt={this.props.title} src={this.props.image} />
        </li>);
    }
}