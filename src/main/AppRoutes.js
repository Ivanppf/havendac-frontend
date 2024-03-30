import {BrowserRouter, Route} from "react-router-dom";
import PropertyCreate from "../screens/property/PropertyCreate";
import PropertyTable from "../screens/property/PropertyTable";
import RoomTable from "../screens/room/RoomTable";
import RoomCreate from "../screens/room/RoomCreate";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component={PropertyTable} path="/properties" exact/>
            <Route component={RoomTable} path="/rooms" exact/>
            <Route component={PropertyCreate} path="/properties/create"/>
            <Route component={RoomCreate} path="/rooms/create"/>
        </BrowserRouter>
    )
}

export default AppRoutes;