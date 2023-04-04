import React from "react";
import { Fragment } from "react";
import { Typography } from "@mui/material";
import BigButton from "../../components/HomeButton";
import JournalContainer from "../../components/JournalContainer";

function MyThoughts() {
  return (
    <Fragment>
      <Typography align="center" fontSize="32px" fontWeight="bold" padding={2}>
        My Thoughts
      </Typography>
      
      <JournalContainer /> 
      <br>
      </br>
      <br>
      </br>
      <BigButton/>
    </Fragment>
  );
}//this is to display the journal container in components
export default MyThoughts;
