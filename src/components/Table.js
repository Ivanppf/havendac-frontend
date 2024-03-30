import React from 'react';
import addIcon from "../assets/ADD.svg";
import editIcon from "../assets/EDIT.svg";
import deleteIcon from "../assets/DELETE.svg";
import searchIcon from "../assets/SEARCH.svg";
import "./table.css";

export default class Table extends React.Component {


    render() {
        return (
            <div className="div-table">
                <div className="div-button-table">
                    <a
                        type="button"
                        href={this.props.href}
                        className="btn btn-success"><img
                        width="30" height="30"
                        alt="addIcon"
                        src={addIcon}/>New {this.props.entityName}
                    </a>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.search}>
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
                            {this.props.titles.map(title => {
                                return (
                                    <th key={title} scope="col" className="text-light">{title}</th>
                                )
                            })}
                            <th scope="col" className="text-light" colSpan="2">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody className="text-center align-middle">
                        {this.props.children.map((item, index) => {
                            return (
                                <tr key={index}>
                                    {item}
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => this.props.editBtn(index, "item")}
                                            className="btn btn-warning"><img
                                            width="30"
                                            height="30"
                                            alt="editIcon"
                                            src={editIcon}/></button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => this.props.deleteBtn(item)}
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
}