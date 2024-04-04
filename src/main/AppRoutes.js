import PropertyCreate from "../screens/property/PropertyCreate";
import PropertyTable from "../screens/property/PropertyTable";
import RoomTable from "../screens/room/RoomTable";
import RoomCreate from "../screens/room/RoomCreate";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {findAll} from "../service/RequestService";

const AppRoutes = createBrowserRouter([
    {
        path: '/', element: <App/>,
        children: [
            {
                path: "/",
                element: <PropertyTable/>,
                loader: async () => {
                    return findAll("http://localhost:8080/api/properties")
                }
            },
            {
                path: "/properties",
                element: <PropertyTable/>,
                loader: async () => {
                    return [] // findAll("http://localhost:8080/api/properties")
                }
            },
            {
                path: "/rooms",
                element: <RoomTable/>,
                loader: async () => {
                    return findAll("http://localhost:8080/api/rooms")
                }
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