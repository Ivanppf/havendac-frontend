import React from 'react';
import './Card.css'

export default class Card extends React.Component {
    render() {
        return (
            <div className="div-cadastro-property">
                <h1 className="titulo text-primary">{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}