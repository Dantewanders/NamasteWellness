import { Card, CardContent, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SpaIcon from '@mui/icons-material/Spa';
import Box from "@mui/material/Box";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../utility/api";
import "./index.css";
import { setToken } from "../../utility/utils";

function LoginForm() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignIn = async () => {
    try {
      // console.log('username value:', usernameValue)
      // console.log('password value:', passwordValue)

      const tokenValue = await login({
        username: usernameValue,
        password: passwordValue,
      });

      console.log('login response', tokenValue);

      // console.log('token value:', tokenValue.token)

      setToken(tokenValue.token);

      routeToHome();
    } catch (error) {
      console.error(error);
      setErrorMsg("Invalid username or password.");
    }
  };

  const navigate = useNavigate();

  const routeToHome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <Fragment>
      <Grid container direction="row" justifyContent="center">
        <Card
          className="form-container"
          sx={{
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
              Sign in
            </Typography>

            <Typography color="red" variant="caption">
              {errorMsg}
            </Typography>

            <Grid container direction="column" justify="center">
              <TextField
                className="form"
                label="Username"
                sx={{ marginBottom: "15px", marginTop: "10px" }}
                onChange={(username) => setUsernameValue(username.target.value)}
                value={usernameValue}
              />

              <TextField
                className="form"
                id="outlined-password-input"
                label="Password"
                type="password"
                sx={{ marginBottom: "5px" }}
                onChange={(password) => setPasswordValue(password.target.value)}
                value={passwordValue}
              />
            </Grid>

            <Box sx={{ display: "flex", justifySelf: "center" }}>
              <Link to={"/forgot-password"}>
                <Typography variant="caption" sx={{ color: "grey" }}>
                  Forgot password
                </Typography>
              </Link>

              <Link to={"/register"}>
                <Typography
                  variant="caption"
                  sx={{ color: "grey", ml: "20px" }}
                >
                  Create an account
                </Typography>
              </Link>
            </Box>

            <Button
              variant="contained"
              sx={{
                width: "90px",
                mt: "10px",
                display: "flex",
                justifySelf: "center",
              }}
              onClick={() => handleSignIn()}
            >
              Sign in
            </Button>

            {/* <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="outlined" 
                  sx={{width: '100px', ml: '20px'}}>
                    Sign up
                </Button>
              </Link> */}
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
}

export default LoginForm;
