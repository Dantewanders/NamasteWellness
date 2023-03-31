import React from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
}

export default MyThoughts;
