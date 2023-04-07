import React from "react";
import { Fragment } from "react";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function quoteCard() {
  return (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography variant="h5" component="div">
          test text
        </Typography>

        <Typography variant="body2">
          Body 2 text
          <br />
          {'"text"'}
        </Typography>
      </CardContent>
    </Fragment>
  );
}
export default quoteCard;
