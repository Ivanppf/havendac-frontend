import PropertyCreate from "../screens/property/PropertyCreate";
import PropertyTable from "../screens/property/PropertyTable";
import RoomTable from "../screens/room/RoomTable";
import RoomCreate from "../screens/room/RoomCreate";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";

const AppRoutes = createBrowserRouter([
    {
        path: '/', element: <App/>,
        children: [
            {
                path: "/",
                element: <PropertyTable/>
            },
            {
                path: "/properties",
                element: <PropertyTable/>
            },
            {
                path: "/rooms",
                element: <RoomTable/>
            },
            {
                path: "/properties/create",
                element: <PropertyCreate/>,
            },
            {
                path: "/rooms/create",
                element: <RoomCreate/>
            },
        ]
    }
])

export default AppRoutes;