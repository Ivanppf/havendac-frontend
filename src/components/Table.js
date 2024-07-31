import React from "react";
import addIcon from "../assets/ADD.svg";
import editIcon from "../assets/EDIT.svg";
import deleteIcon from "../assets/DELETE.svg";
import searchIcon from "../assets/SEARCH.svg";
import "./table.css";
import AuthenticationAPIService from "../service/AuthenticationAPIService";

export default function Table(props) {

  const isAuthorized = () => {
    const service = new AuthenticationAPIService()
    const user = service.getLoggedUser();
    if(user) {
const roles = user.roles
      return roles[0] === "ADMIN"
    }
  };


  return (
    <div className="div-table">
      <div className="div-button-table">
        {isAuthorized() && (
          <a type="button" href={props.href} className="btn btn-success ">
            <img width="30" height="30" alt="addIcon" src={addIcon} />
            New {props.entityName}
          </a>
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.search}
        >
          <img width="30" height="30" alt="addIcon" src={searchIcon} />
          Search
        </button>
      </div>
      <div className="div-tabela">
        <table className="table table-striped table-hover table-bordered align-middle">
          <thead className="table-primary sticky-top">
            <tr className="text-center align-middle ">
              {props.titles.map((title) => {
                return (
                  <th key={title} scope="col" className="text-light">
                    {title}
                  </th>
                );
              })}
              {isAuthorized() && (
                <th scope="col" className="text-light" colSpan="2">
                  ACTIONS
                </th>
              )}
            </tr>
          </thead>
          <tbody className="text-center align-middle">
            {props.children.map((item, index) => {
              return (
                <tr key={index}>
                  {item}
                  {isAuthorized() && (
                    <>
                      <td>
                        <a
                          type="button"
                          onClick={() => props.editBtn(index)}
                          className="btn btn-warning"
                        >
                          <img
                            width="30"
                            height="30"
                            alt="editIcon"
                            src={editIcon}
                          />
                        </a>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => props.deleteBtn(index)}
                          className="btn btn-danger"
                        >
                          <img
                            width="30"
                            height="30"
                            alt="editIcon"
                            src={deleteIcon}
                          />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
