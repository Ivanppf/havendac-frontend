import PropertyCreate from "../screens/property/PropertyCreate";
import PropertyTable from "../screens/property/PropertyTable";
import RoomTable from "../screens/room/RoomTable";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import PropertyRequestService from "../service/PropertyRequestService";
import RoomRequestService from "../service/RoomRequestService";
import PropertyUpdate from "../screens/property/propertyUpdate";
import RoomUpdate from "../screens/room/RoomUpdate";
import Signin from "../screens/login/Signin";
import Register from "../screens/login/Register";
import React from "react";
import RoomCreate from "../screens/room/RoomCreate";
import RestrictedRoute from "./RestrictedRoute";
import { Suspense } from "react";
import AuthenticationAPIService from "../service/AuthenticationAPIService";
import Logout from "../screens/login/Logout";
import StorageService from "../service/StorageService";
import { LOGGED_USER } from "../service/RequestService";
import Home from "../screens/home/home";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/properties",
        element: (
          <RestrictedRoute>
            <PropertyTable />
          </RestrictedRoute>
        ),
      },
      {
        path: "/rooms",
        element: (
          <RestrictedRoute>
            <RoomTable />
          </RestrictedRoute>
        ),
      },
      {
        path: "/properties/create",
        element: (
          <RestrictedRoute>
            <PropertyCreate />,
          </RestrictedRoute>
        ),
      },
      {
        path: "/rooms/create",
        element: (
          <RestrictedRoute>
            <RoomCreate />
          </RestrictedRoute>
        ),
      },
      {
        path: "/properties/update",
        element: (
          <RestrictedRoute>
            <PropertyUpdate />
          </RestrictedRoute>
        ),
      },
      {
        path: "/rooms/update",
        element: (
          <RestrictedRoute>
            <RoomUpdate />
          </RestrictedRoute>
        ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        loader: async () => {
          const storageService = new StorageService();
          return storageService.getItem(LOGGED_USER);
        },
        element: <Logout />,
      },
    ],
  },
]);

export default AppRoutes;
