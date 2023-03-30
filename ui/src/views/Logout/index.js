import { clearToken } from "../../utility/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();

  // logout user by removing jwt from local storage
  clearToken();

  // redirect user to home page
  useEffect(() => {
    navigate("/");
    window.location.reload();
  }, [navigate]);
  return <div>Logout</div>;
}

export default Logout;
