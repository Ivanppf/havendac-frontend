import { useContext, useEffect, useState } from "react";
import RoomCreate from "../screens/room/RoomCreate";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "./SessionProvider";

export default function RestrictedRoute(props) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const data = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsAuthenticated(data.isAuthenticated);
      setLoading(false);
    };

    fetchData();
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <>{props.children}</>;
  } else {
    
    return <Navigate to={"/signin"} />;
  }
}
