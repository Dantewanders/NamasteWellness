import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../utility/utils";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function MySleep() {
  const EnergyLevel = [
    {
      value: 0,
      label: "Low",
    },
    {
      value: 50,
      label: "Medium",
    },
    {
      value: 100,
      label: "High",
    },
  ];

  const Input = MuiInput;
  // width= "42px";

  const [value, setValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const [Sleep, setSleep] = useState(""); //this is to select sleep duration
  const [Energy, setEnergy] = useState(""); //this is to select energy level
  const [errorMsg, setErrorMsg] = useState(""); //this is to display my error message
  const [isChoosing, setIsChoosing] = useState(false);

  const navigate = useNavigate();
  //this checks if the user is logged in

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
  }, []); 

  const handleStart = () => {
    if (!Sleep) {
      return setErrorMsg(
        "Please select your Sleep & Energy before continuing."
      );
    }

    localStorage.setItem("Sleep", Sleep);
    localStorage.setItem("Energy", Energy);

    navigate("/mythoughts");

    setIsChoosing(true);
  };
  const handleSelectSleep = (event, selected) => {
    console.log("sleep value", selected)
    setSleep(selected);

    if (Sleep === selected) {
      setSleep("");
    } //this is to select the sleep duration
  };
  // if (isChoosing) {
  //   return (
  //     <MySleep
  //       Sleep={Sleep} //this is to pass the sleep choice to the next page
  //     />
  //   );
  // }
  const handleSelectEnergy = (event, value) => {
    if (value > 0 && value < 50) {
      setEnergy("Low");
    } else if (value === 50) {
      setEnergy("Medium");
    } else if (value > 50 && value <= 100) {
      setEnergy("High");
    }  
  };
  if (isChoosing) {
    return (
      <MySleep
        Sleep={Sleep} //this is to pass the sleep choice to the next page
      />
    );
  }
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <Fragment>
      <Typography align="center" fontSize="32px" fontWeight="bold">
        My Sleep
      </Typography>
      <Grid align="center" mt="40px">
        <Typography color="red" fontSize="18px" mb="15px">
          {errorMsg}
        </Typography>
        <Box sx={{ width: 300 }}>
          <Typography id="input-slider" gutterBottom>
            Energy Level
          </Typography>
          <Slider
            aria-label="Always visible"
            defaultValue={50}
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="on"
            onChange={handleSelectEnergy}
            color={EnergyLevel === "High" ? "success" : "primary"}
          />
        </Box>

        <Box
          sx={{ width: 250 }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
          style={{ maxWidth: "950px" }}
          marginTop="50px"
        >
          <Typography id="input-slider" gutterBottom>
            Sleep Duration
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item></Grid>
            <Grid item xs>
              <Slider
                onChange={handleSelectSleep}
                aria-labelledby="input-slider"
                color={Sleep === "8" ? "success" : "primary"}
              />
            </Grid>

            <Grid item>
              <Input
                value={Sleep}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 24,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" color="secondary" onClick={handleStart}>
          <Typography fontWeight="bold" fontSize="15px">
            Next
          </Typography>
        </Button>
      </Grid>
    </Fragment>
  );
}

export default MySleep;
