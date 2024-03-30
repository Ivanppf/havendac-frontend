import React from "react";
import Table from "../../components/Table";
import checkIcon from "../../assets/CHECK-CIRCLE.svg"
import cancelIcon from "../../assets/CANCEL.svg"
import {findAll, remove} from "../../service/RequestService";


export default class PropertyTable extends React.Component {

    apiUrl = "http://localhost:8080/api/properties"
    state = {
        tableItens: []
    }

    deleteProperty = (index) => {
        const resp = window.confirm(`Are you sure you want to delete this property? ${index}`)
        
    }

    editProperty = (index, item) => {
        window.alert(`index: ${index} item: ${item}`)
    }

    loadTable = () => {
        findAll(this.apiUrl)
            .then(itens => this.setState({
                tableItens: itens
            }))
        // {tableItens: [this.state.tableItens, itens]}))
    }


    render() {
        return (
            <>
                <Table className="div-property-table"
                       titles={["PROPERTY ID", "TYPE", "IS AVAILABLE", "IS COUNTRYSIDE", "HAS SWIMMING POOL", "DESCRIPTION"]}
                       entityName="Property"
                       deleteBtn={this.deleteProperty}
                       editBtn={this.editProperty}
                       search={this.loadTable}
                       href={"/properties/create"}>
                    {this.state.tableItens.map(item => {
                        return (
                            <>
                                <td key={item.id}>{item.id}</td>
                                <td>{item.type}</td>
                                <td><img src={item.isAvailable ? checkIcon : cancelIcon} alt="icon"/></td>
                                <td><img src={item.isCountryside ? checkIcon : cancelIcon} alt="icon"/></td>
                                <td><img src={item.hasSwimmingPool ? checkIcon : cancelIcon} alt="icon"/></td>
                                <td>{item.description}</td>
                            </>
                        )
                    })}</Table>
            </>
        )
    }
}