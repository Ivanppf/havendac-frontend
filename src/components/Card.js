import React from 'react';
import './Card.css'
import {Form} from "react-router-dom";


export default function Card(props) {
    return (
        <Form className="div-cadastro-property">
            <h1 className="titulo text-primary">{props.title}</h1>
            {props.children}
            <div className="div-button-property mt-2">
                <button className="btn btn-primary"
                        onClick={props.register}>Send
                </button>
            </div>
        </Form>
    )
}