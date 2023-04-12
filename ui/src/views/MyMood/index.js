import React from "react";
import { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { isUserLoggedIn } from "../../utility/utils";
import "./index.css";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Box from "@mui/material/Box";

const moodIcons = {
  Happy: <EmojiEmotionsIcon />,
  Positive: <EmojiEmotionsIcon />,
  Sad: <SentimentVeryDissatisfiedIcon />,
};

function MyMood() {
  const [Mood, setMood] = useState(""); //this is to select my mood
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
    //this is to start the process
    if (!Mood) {
      return setErrorMsg("Please select your Mood before continuing.");
    }

    localStorage.setItem("Mood", Mood); //this is to store the mood in the local storage

    navigate("/mysleep"); //this is to navigate to the mysleep page

    setIsChoosing(true);
  };

  const handleSelectMood = (selected) => {
    setMood(selected);

    if (Mood === selected) {
      setMood("");
    } //this is to select the mood
  };
  if (isChoosing) {
    return (
      <MyMood
        Mood={Mood} //this is to pass the mood to the next page
      />
    );
  }
  return (
    <Fragment>
      <Grid marginBottom="20px" marginLeft={10} maxWidth={1200}>
        <Grid item mt="20px" mb="20px">
          <Typography variant="h5" fontWeight="bold">
            Monitoring your Mood
          </Typography>

          <Typography variant="body1">
            Understanding your moods helps you manage them and feel better
            faster. If you are more aware of your moods, you may be able to
            better manage your lifestyle choices, make informed health
            decisions, prevent or avoid triggers of negative moods, and work
            towards a better quality of life. The trick is to watch for changes
            in your mood, particularly any very high swings or very low dips
            (which may mean you need help to even out your emotional state).
            Self-monitoring is free and takes hardly any time. And it becomes
            easier as you make it part of your daily routine.
          </Typography>
          <Typography>
            <p></p>
          </Typography>
        </Grid>
        <Grid>
          <Typography align="center" fontSize="25px" fontWeight="bold">
            How do You feel today?
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={5}
          columnSpacing={10}
          style={{ maxWidth: "1500px" }}
          marginTop="20px"
          marginBottom="50px"
        >
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Happy")}
              color={Mood === "Happy" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">
                <div className="feeling">
                  <div>Happy</div>
                  {/* <div className="feeling-icon"> {moodIcons["Happy"]}</div> */}
                </div>
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Positive")}
              color={Mood === "Positive" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">
                <div className="feeling">
                  <div>Positive</div>
                  {/* <div className="feeling-icon"> {moodIcons["Positive"]}</div> */}
                </div>
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Reflective")}
              color={Mood === "Reflective" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Reflective</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Irritated")}
              color={Mood === "Irritated" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Irritated</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Hurt")}
              color={Mood === "Hurt" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Hurt</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Ashamed")}
              color={Mood === "Ashamed" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Ashamed</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Sad")}
              color={Mood === "Sad" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">
                <div className="feeling">
                  <div>Sad</div>
                  {/* <div className="feeling-icon"> {moodIcons["Sad"]}</div> */}
                </div>
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Loved")}
              color={Mood === "Loved" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Loved</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Optimistic")}
              color={Mood === "Optimistic" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Optimistic</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Angry")}
              color={Mood === "Angry" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Angry</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Calm")}
              color={Mood === "Calm" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Calm</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSelectMood("Bored")}
              color={Mood === "Bored" ? "success" : "primary"}
            >
              <Typography fontWeight="bold">Bored</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid align="center" mt="40px">
        <Typography color="red" fontSize="18px" mb="15px">
          {errorMsg}
        </Typography>

        <Button variant="contained" color="secondary" onClick={handleStart}>
          <Typography fontWeight="bold" fontSize="15px">
            Continue Journal
          </Typography>
        </Button>
      </Grid>
    </Fragment>
  );
} //use the namaste button to navigate to mySleep and store the mood choice locally

export default MyMood;
