import React, { useState } from "react";
import Table from "../../components/Table";
import checkIcon from "../../assets/CHECK-CIRCLE.svg";
import cancelIcon from "../../assets/CANCEL.svg";
import { useNavigate } from "react-router-dom";
import PropertyRequestService from "../../service/PropertyRequestService";
import { useEffect } from "react";

export default function PropertyTable() {
  const navigate = useNavigate();
  let [tableItens, setTableItens] = useState([]);
  const propertyRequestService = new PropertyRequestService();

  useEffect(() => {
    loadTable();
  }, []);

  function deleteProperty(index) {
    const resp = window.confirm(
      `Are you sure you want to delete this property?`
    );
    if (resp) {
      propertyRequestService
        .remove(tableItens[index].id)
        .then((r) => loadTable());
    }
  }

  function editProperty(index) {
    const data = tableItens[index];
    data["id"] = tableItens[index].id;
    navigate("/properties/update", { state: data });
  }

  function loadTable() {
    propertyRequestService.findAll().then((itens) => setTableItens(itens));
  }

  return (
    <>
      <Table
        className="div-property-table"
        titles={[
          "PROPERTY ID",
          "TYPE",
          "IS AVAILABLE",
          "IS COUNTRYSIDE",
          "HAS SWIMMING POOL",
          "DESCRIPTION",
        ]}
        entityName="Property"
        deleteBtn={deleteProperty}
        editBtn={editProperty}
        search={loadTable}
        href={"/properties/create"}
      >
        {tableItens.map((item) => {
          return (
            <>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>
                <img
                  src={item.isAvailable ? checkIcon : cancelIcon}
                  alt="icon"
                />
              </td>
              <td>
                <img
                  src={item.isCountryside ? checkIcon : cancelIcon}
                  alt="icon"
                />
              </td>
              <td>
                <img
                  src={item.hasSwimmingPool ? checkIcon : cancelIcon}
                  alt="icon"
                />
              </td>
              <td>{item.description}</td>
            </>
          );
        })}
      </Table>
    </>
  );
}
