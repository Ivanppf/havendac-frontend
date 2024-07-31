import { useLoaderData, useNavigate } from "react-router-dom";
import AuthenticationAPIService from "../../service/AuthenticationAPIService";
import { useState } from "react";

export default function Logout() {
  let [user, setUser] = useState(useLoaderData());
  const service = new AuthenticationAPIService();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    const resp = window.confirm(
      `Are you sure you want to leave?`
    );
    if (resp) {
      service.logout();
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Nickname:</strong> {user.nickname}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <div>
        <button className="btn btn-primary" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
}
