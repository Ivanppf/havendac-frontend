import React from 'react';
import './Card.css'
import {Form} from "react-router-dom";


export default function Card(props) {
    return (
        <Form className="div-card">
            <h1 className="titulo text-primary">{props.title}</h1>
            {props.children}
        </Form>
    )
}