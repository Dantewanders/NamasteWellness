import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../utility/utils";
import { Typography } from "@mui/material";
import "./index.css";
import MoodButton from "../../components/MoodButton";
import SleepButton from "../../components/SleepButton";
import ThoughtsButton from "../../components/ThoughtsButton";

function MyWellness() {
  
  const navigate = useNavigate()
    //this checks if the user is logged in

    useEffect(() => {
    if (!isUserLoggedIn()) {
        navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <Typography align="center" fontSize="32px" fontWeight="bold">
        My Wellness
      </Typography>
      <MoodButton/>
      <SleepButton/>
      <ThoughtsButton/>
    </Fragment>
  );
}

export default MyWellness;
