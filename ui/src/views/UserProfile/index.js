import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { getUserProfile } from "../../utility/api";

//API call to get the gameMode values from the game table
function MyWellness() {}

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
