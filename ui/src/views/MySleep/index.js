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
import sleep from "../../Images/sleep.jpg";





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

  // const handleSliderChange = (event, newValue) => {
  //   setValue(newValue);
  // };

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
    console.log("sleep value", selected);
    setSleep(selected);

    if (Sleep === selected) {
      setSleep("");
    } //this is to select the sleep duration
  };

  const handleSelectEnergy = (event, value) => {
    if (value > 0 && value < 50) {
      //this is to select the energy level with a value 0-49 of Low energy
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
  // function valuetext(value) {
  //   return `${value} Hours`;
  // }
  return (
    <Fragment>
      <Grid m="50px">
        <Grid item>
          <Typography variant="h5" fontWeight="bold" mt="20px" mb= "20px">
            Monitoring your Sleep
          </Typography>

          <Typography variant="body1">
            There's no denying the importance of sleep in our busy lifestyles.
            And there's also no denying that incredible feeling of waking up
            after a good night's rest. Unfortunately, having a restless night of
            poor sleep is something we have to deal with from time to time. But
            learning what causes a good or bad night's sleep can be hard to
            identify. Enter Namaste Wellness.
          </Typography>
          <Typography variant="h5" fontWeight="bold" mt="20px" mb= "20px">
            Truth and sleep
          </Typography>
          <Typography variant="body1" mt="20px" mb="20px">
            The benefits of sleep tracking are as flexible as your journey
            through life, then. A number that means nothing to you now, can be
            the single most important one in a few months. These quantified
            truths remain non-judgmental, because you decide their relevance.
            You apply the value to them. The data is nothing without you and it
            certainly doesn't get to decide who you are and what you feel like
            on a certain day. But it helps you understand yourself. It helps you
            make informed decisions on your health. It clears away certain
            doubts and you can focus on that which remains, your subjective
            experience on your quality of rest and what you need to reach better
            sleep. That is the benefit of sleep tracking. That is our mission at
            Namaste Wellness, to help you reach better health through better
            sleep, one point of truth at a time.
          </Typography>
          <Typography variant="h5" fontWeight="bold" mt="20px" mb= "20px" >
            How Does Sleep Impact Energy Levels?
          </Typography>
          <Typography variant="body1" mt="20px" mb= "20px">
            The relationship between lifestyle choices and sleep also impacts
            our energy balance. Energy balance is used to describe the net
            outcome of energy intake (food consumption) with energy expenditure
            (activity). Insufficient sleep has been linked to an imbalanced
            increase in energy intake over expenditure, which leads to a
            positive energy balance and weight gain. Sleep quality may also
            moderate the relationship between physical activity and feelings of
            fatigue. This indicates that diet, exercise, and sleep all interact
            and influence our feelings of energy and our energy balance.
          </Typography>
          <Typography>
          <img src={sleep} alt="sleep" />
          </Typography>
        </Grid>

        <Grid align="center" mt="40px">
          <Typography color="red" fontSize="18px" mb="15px">
            {errorMsg}
          </Typography>
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
                  defaultValue={8}
                  min={0}
                  max={24}
                  step={1}
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
                    "aria-labelledby": "sleep input-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: 300 }} mb="25px">
            <Typography id="input-slider" gutterBottom>
              Energy Level
            </Typography>
            <Slider
              aria-label="Always visible"
              defaultValue={50}
              min={0}
              max={100}
              step={1}
              valueLabelDisplay="off"
              onChange={handleSelectEnergy}
              color={EnergyLevel === "High" ? "success" : "primary"}
            />
          </Box>

          <Button variant="contained" color="secondary" onClick={handleStart}>
            <Typography fontWeight="bold" fontSize="15px">
              Next
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default MySleep;
