import React from "react";
import { Fragment } from "react";
import { Typography } from "@mui/material";
import BigButton from "../../components/HomeButton";
import JournalContainer from "../../components/JournalContainer";

function MyThoughts() {
  return (
    <Fragment>
      <Typography align="center" fontSize="32px" fontWeight="bold">
        My Thoughts
      </Typography>
      
      <JournalContainer /> 
      
      <BigButton/>
    </Fragment>
  );
}//this is to display the journal container in components
export default MyThoughts;
