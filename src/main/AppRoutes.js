import PropertyCreate from "../screens/property/PropertyCreate";
import PropertyTable from "../screens/property/PropertyTable";
import RoomTable from "../screens/room/RoomTable";
import RoomCreate from "../screens/room/RoomCreate";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import PropertyRequestService from "../service/PropertyRequestService";
import RoomRequestService from "../service/RoomRequestService";
import PropertyUpdate from "../screens/property/propertyUpdate";

const AppRoutes = createBrowserRouter([
    {
        path: '/', element: <App/>,
        children: [
            {
                path: "/",
                element: <PropertyTable/>,
                loader: async () => {
                    return []
                    const propertyRequestService = new PropertyRequestService();
                    return propertyRequestService.findAll()
                }
            },
            {
                path: "/properties",
                element: <PropertyTable/>,
                loader: async () => {
                    return []
                    const propertyRequestService = new PropertyRequestService();
                    return propertyRequestService.findAll()
                }
            },
            {
                path: "/rooms",
                element: <RoomTable/>,
                loader: async () => {
                    return []
                    const roomRequestService = new RoomRequestService();
                    return roomRequestService.findAll()
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
            {
                path: "/properties/update",
                element: <PropertyUpdate/>
            },
            // {
            //     path: "/rooms/update",
            //     element: <RoomUpdate/>
            // },
        ]
    }
])

export default AppRoutes;