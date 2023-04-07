import { Card, CardContent, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SpaIcon from "@mui/icons-material/Spa";
import ListItem from "@mui/material/ListItem";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../utility/api";
import { setToken } from "../../utility/utils";
import "./index.css";

function RegistrationForm() {
  const [emailValue, SetEmailValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [state, setState] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [retypePasswordValue, setRetypePasswordValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async () => {
    try {
      // console.log('email value:', emailValue)
      // console.log('username value:', usernameValue)
      // console.log('password value:', passwordValue)
      // console.log('retyped password value:', retypePasswordValue)

      if (passwordValue !== retypePasswordValue) {
        return setErrorMsg("Passwords do not match.");
      }

      const tokenValue = await register({
        email: emailValue,
        username: usernameValue.trim(),
        password: passwordValue,
        first_name: first_name,
        last_name: last_name,
        date_of_birth: date_of_birth,
        state: state,
      });

      // console.log('token value', tokenValue.token)

      setToken(tokenValue.token);

      routeToHome();
    } catch (error) {
      console.log("READ THE ERROR HERE:", error);
      if (error) {
        setErrorMsg(`${error.toString().substr(26)}`);
      }
    }
  };

  let navigate = useNavigate();

  const routeToHome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <Fragment>
      <Grid container direction="row" justifyContent="center">
        <Card
          size="lg"
          className="form-container"
          sx={{
            width: "400px",
            height: "auto",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "3px 2px 7px rgb(0, 0, 0, 0.5)",
          }}
        >
          <CardContent sx={{ display: "grid", margin: "20px" }}>
            <SpaIcon
              sx={{ display: "flex", justifySelf: "center", color: "#42a5f5" }}
            />
            <Typography
              fontFamily="monospace"
              fontWeight="700"
              display="flex"
              justifyContent="center"
              fontSize="30px"
              color="#0288d1"
            >
              Namaste Wellness
            </Typography>

            <Typography variant="h6" fontWeight="bold" mt="10px">
              Register
            </Typography>

            <Typography color="red" variant="caption">
              {errorMsg}
            </Typography>

            <Grid container direction="column" justify="center">
              <TextField
                className="form"
                label="First Name"
                sx={{
                  marginBottom: "15px",
                  border: "1px solid white",
                  marginTop: "10px",
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
                onChange={(first_name) => setFirstName(first_name.target.value)}
                value={first_name}
              />
              <TextField
                className="form"
                label="Last Name"
                sx={{ marginBottom: "15px", marginTop: "10px" }}
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
              />

              <TextField
                className="form"
                label="Date of Birth (YYYY-MM-DD) "
                sx={{ marginBottom: "15px", marginTop: "10px" }}
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={date_of_birth}
              />
              <TextField
                className="form"
                label="State"
                sx={{ marginBottom: "15px", marginTop: "10px" }}
                onChange={(e) => setState(e.target.value)}
                value={state}
              />
              <TextField
                className="form"
                label="Email"
                sx={{ marginBottom: "15px", marginTop: "10px" }}
                onChange={(email) => SetEmailValue(email.target.value)}
                value={emailValue}
              />

              <TextField
                className="form"
                label="Username"
                sx={{ marginBottom: "15px" }}
                onChange={(username) => setUsernameValue(username.target.value)}
                value={usernameValue}
                autoComplete="off"
              />

              <TextField
                className="form"
                label="Password"
                type="password"
                sx={{ marginBottom: "15px" }}
                onChange={(password) => setPasswordValue(password.target.value)}
                value={passwordValue}
                autoComplete="off"
              />

              <TextField
                className="form"
                label="Re-type password"
                type="password"
                sx={{ marginBottom: "5px" }}
                onChange={(retypePassword) =>
                  setRetypePasswordValue(retypePassword.target.value)
                }
                value={retypePasswordValue}
              />

              <Typography variant="caption">
                Password requirements:
                <ListItem
                  disablePadding={true}
                  sx={{ display: "list-item", ml: "10px" }}
                >
                  8 characters or longer.
                </ListItem>
                <ListItem
                  disablePadding={true}
                  sx={{ display: "list-item", ml: "10px" }}
                >
                  Contain a number.
                </ListItem>
              </Typography>
            </Grid>

            <Link to={"/login"}>
              <Typography variant="caption" sx={{ color: "grey" }}>
                Already have an account? Log in here
              </Typography>
            </Link>

            <Button
              className="button"
              variant="contained"
              sx={{ marginTop: "10px", width: "90px" }}
              onClick={() => handleRegister()}
            >
              Register
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
}

export default RegistrationForm;
