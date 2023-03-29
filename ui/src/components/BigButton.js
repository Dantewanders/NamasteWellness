import React from "react";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function BigButton() {
  return (
    <Fragment>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{ boxShadow: "3px 2px 7px rgb(0, 0, 0, 0.5)" }}
      >
        <Typography fontWeight="bold" fontSize="24px">
          Button
        </Typography>
      </Button>
    </Fragment>
  );
}

export default BigButton;
