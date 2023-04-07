import React from "react";
import { Fragment } from "react";
import { Typography } from "@mui/material";
import BigButton from "../../components/HomeButton";
import JournalContainer from "../../components/JournalContainer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

function MyThoughts() {
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          align="center"
          fontSize="32px"
          fontWeight="bold"
          padding={2}
        >
          My Thoughts
        </Typography>
        <br></br>
        <Card sx={{ minWidth: 375, maxWidth: 1075, borderRadius: "25px" }}>
          <CardContent>
            <JournalContainer />
          </CardContent>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Grid>
      <BigButton />
    </Fragment>
  );
} //this is to display the journal container in components
export default MyThoughts;
