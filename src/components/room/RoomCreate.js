import React from "react";

export default class RoomCreate extends React.Component {
    state = {
        length: 0,
        width: 0,
        propertyId: 0
    }

    register = () => {
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <>
                <div className="div-cadastro">
                    <h1 className="titulo">Room</h1>
                    <label>length</label>
                    <br/>
                    <input placeholder="0" onChange={e => this.setState({length: e.target.value})}
                           type="number"/>
                    <br/>
                    <label>width</label>
                    <br/>
                    <input placeholder="0" onChange={e => this.setState({width: e.target.value})}
                           type="number"/>
                    <br/>
                    <label>property id</label>
                    <br/>
                    <input placeholder="0" onChange={e => this.setState({propertyId: e.target.value})}
                           type="number"/>
                    <br/>
                </div>
                <button onClick={this.register}>Send</button>
            </>
        )
    }
}
