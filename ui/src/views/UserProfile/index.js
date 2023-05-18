import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUserProfile } from "../../utility/api";
import Grid from "@mui/material/Grid";
import { InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import InputUnstyled from "@mui/base";
import { styled } from "@mui/system";
import Input from '@mui/base/Input';

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#24292f",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 220px;
  font-family: Oxygen, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 0px 20px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

function UnstyledInputIntroduction({ value = "", label = "Input label" }) {
  return (
    <Box sx={{ m: 2 }}>
      {/* {" "} */}
      <InputLabel style={{ color: "#fff" }}>{label}</InputLabel>{" "}
      <CustomInput
        label="Dante"
        aria-label="Demo input"
        placeholder="Type something…"
        margin="normal"
        value={value}
      />
    </Box>
  );
}

function UserProfile() {
  const [data, setData] = useState(null);
  const { username } = useParams();

  //Get user info by username passed in URL
  useEffect(() => {
    getUserProfile(username)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [username]);

  return (
    <div>
     
        <Grid container alignItems={"center"} margin={7} spacing={6}>
          <Grid item xs={12} sm={4}>
            <UnstyledInputIntroduction
              label="First Name"
              value={data?.first_name}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <UnstyledInputIntroduction
              label="Last Name"
              value={data?.last_name}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <UnstyledInputIntroduction
              label="Username"
              value={data?.username}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <UnstyledInputIntroduction label="Email" value={data?.email} />{" "}
          </Grid>
          <Grid item xs={12} sm={4}>
            <UnstyledInputIntroduction
              label="Date of birth"
              value={new Date(data?.date_of_birth).toLocaleDateString()}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            {" "}
            <UnstyledInputIntroduction label="State" value={data?.state} />
          </Grid>
        </Grid>
     
    </div>
  );
}

export default UserProfile;
