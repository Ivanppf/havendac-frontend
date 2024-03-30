import React from "react";
import './roomCreate.css';
import Card from "../../components/Card";

export default class RoomCreate extends React.Component {
    state = {
        length: 0,
        width: 0,
        propertyId: 0
    }

    register = () => {
        window.alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <Card className="div-cadastro-room" title="Room">
                <div>
                    <label className="col-form-label mt-2" htmlFor="inputDefault">length</label>
                    <input type="number" className="form-control" placeholder="0" id="inputDefault"
                           onChange={e => this.setState({length: e.target.value})}/>
                </div>
                <div>
                    <label className="col-form-label mt-2" htmlFor="inputDefault">width</label>
                    <input type="number" className="form-control" placeholder="0" id="inputDefault"
                           onChange={e => this.setState({width: e.target.value})}/>
                </div>
                <div>
                    <label className="col-form-label mt-2" htmlFor="inputDefault">property id</label>
                    <input type="number" className="form-control" placeholder="0" id="inputDefault"
                           onChange={e => this.setState({propertyId: e.target.value})}/>
                </div>
                <div className="div-button-room mt-2">
                    <a href="/rooms" className="btn btn-primary" onClick={this.register}>Send</a>
                </div>
            </Card>
        )
    }
}
