import React from 'react';
import addIcon from "../assets/ADD.svg";
import editIcon from "../assets/EDIT.svg";
import deleteIcon from "../assets/DELETE.svg";
import searchIcon from "../assets/SEARCH.svg";
import "./table.css";

export default function Table(props) {

    return (
        <div className="div-table">
            <div className="div-button-table">
                <a
                    type="button"
                    href={props.href}
                    className="btn btn-success "><img
                    width="30" height="30"
                    alt="addIcon"
                    src={addIcon}/>New {props.entityName}
                </a>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.search}>
                    <img
                        width="30" height="30"
                        alt="addIcon"
                        src={searchIcon}/>Search
                </button>
            </div>
            <div className="div-tabela">
                <table className="table table-striped table-hover table-bordered align-middle">
                    <thead className="table-primary sticky-top">
                    <tr className="text-center align-middle ">
                        <th scope="col" className="text-light">N.º</th>
                        {props.titles.map(title => {
                            return (
                                <th key={title} scope="col" className="text-light">{title}</th>
                            )
                        })}
                        <th scope="col" className="text-light" colSpan="2">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                    {props.children.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {item}
                                <td><a
                                    type="button"
                                    onClick={() => props.editBtn(index)}
                                    className="btn btn-warning"><img
                                    width="30"
                                    height="30"
                                    alt="editIcon"
                                    src={editIcon}/>
                                </a>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => props.deleteBtn(index)}
                                        className="btn btn-danger"><img
                                        width="30" height="30"
                                        alt="editIcon"
                                        src={deleteIcon}/>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}