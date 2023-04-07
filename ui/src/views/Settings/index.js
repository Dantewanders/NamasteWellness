import { useState, forwardRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { updatePassword } from "../../utility/api";
import Button from "@mui/material/Button";
import { getToken } from "../../utility/utils";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Settings(props) {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = async () => {
    try {
      const token = getToken();
      const data = { password: passwordValue };
      await updatePassword(token, data);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1> Update User Password </h1>
        <TextField
          className="form"
          id="outlined-password-input"
          label="Password"
          type="password"
          sx={{ marginBottom: "5px", borderRadius: "25px", background: "#fff" }}
          onChange={(password) => setPasswordValue(password.target.value)}
          value={passwordValue}
        />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Password Updated Successfully!
          </Alert>
        </Snackbar>
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}

export default Settings;
