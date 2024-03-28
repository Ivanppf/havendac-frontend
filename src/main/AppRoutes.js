import {BrowserRouter, Route} from "react-router-dom";
import PropertyCreate from "../screens/property/PropertyCreate";
import PropertyTable from "../screens/property/PropertyTable";
import RoomTable from "../screens/room/RoomTable";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component={PropertyTable} path="/properties"/>
            <Route component={RoomTable} path="/rooms"/>
            <Route component={PropertyCreate} path="/" exact/>
        </BrowserRouter>
    )
}

export default AppRoutes;