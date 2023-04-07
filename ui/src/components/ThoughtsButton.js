import React from "react";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function ThoughtsButton() {
  return (
    <Fragment>
      <Button
        component={Link}
        to="/mythoughts"
        variant="contained"
        size="large"
        sx={{
          boxShadow: "3px 2px 7px rgb(0, 0, 0, 0.5)",
          borderRadius: "25px",
        }}
      >
        <Typography fontWeight="bold" fontSize="24px">
          My Thoughts
        </Typography>
      </Button>
    </Fragment>
  );
}

export default ThoughtsButton;
