import React from 'react';
import addIcon from "../assets/ADD.svg";
import editIcon from "../assets/EDIT.svg";
import deleteIcon from "../assets/DELETE.svg";
import "./table.css";
import {render} from "@testing-library/react";

export default class Table extends React.Component {

    render() {
        return (
            <div className="div-table">
                <div className="div-button-table">
                    <button type="button" className="btn btn-success"><img width="30" height="30"
                                                                           alt="editIcon"
                                                                           src={addIcon}/>New {this.props.object}
                    </button>
                </div>
                <div className="div-tabela">
                    <table className="table table-striped table-hover table-bordered  align-middle">
                        <thead className="table-primary sticky-top">
                        <tr className="text-center align-middle ">
                            {this.props.titles.map(title => {
                                return (
                                    <th scope="col" className="text-light">{title}</th>
                                )
                            })}
                            <th scope="col" className="text-light" colSpan="2">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody className="text-center align-middle">
                        {this.props.tableItens.map((item, index) => {
                            return (
                                <tr>
                                    {item}
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-warning"><img
                                            width="30"
                                            height="30"
                                            alt="editIcon"
                                            src={editIcon}/></button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"><img
                                            width="30" height="30"
                                            alt="editIcon"
                                            onClick={() => this.props.deleteBtn(index)}
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
}