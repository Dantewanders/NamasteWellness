import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserProfile } from "../../utility/api";

function UserProfile() {
  const [data, setData] = useState(null);
  const { username } = useParams();

  //Get user info by username passed in URL
  useEffect(() => {
    getUserProfile(username)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [username]);

  return <div>Hello Profile</div>;
}

export default UserProfile;
