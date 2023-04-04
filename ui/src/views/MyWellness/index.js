import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../utility/utils";
import { Typography } from "@mui/material";
import "./index.css";
import MoodButton from "../../components/MoodButton";
import SleepButton from "../../components/SleepButton";
import ThoughtsButton from "../../components/ThoughtsButton";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { getMyJournal, getsQuote } from "../../utility/api";
import { getToken } from "../../utility/utils";

function MyWellness() {
  const [sleep, setSleep] = useState("");
  const [mood, setMood] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [energy, setEnergy] = useState("");
  const [quote, setQuote] = useState("");
  // const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  //this checks if the user is logged in

  const getJournal = async () => {
    const token = getToken();
    const response = await getMyJournal(token);
    const result = await response.json();
    setSleep(result[0].sleepDuration);
    setMood(result[0].mood);
    setThoughts(result[0].thoughts);
    setEnergy(result[0].energy);
   
  };

  const getQuote = async () => {
    const response = await getsQuote();
    const result = await response.json();
    setQuote(result[0].quote);
    
    console.log(result);
  };
  // const getAuthor = async () => {
  //   const response = await getsAuthor();
  //   const result = await response.json();
  //   setQuote(result[0].author);
    
  //   console.log(result);
  // };

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
    getJournal();
    getQuote();
  }, []);
  const bull = (
    <Box
      // component=" span "
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  const quoteCard = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={"center"}gutterBottom>
          Quote of the Day
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {quote}
        </Typography>

        <Typography variant="body2">
          
          <br />
          {"Author"}
        </Typography>
      </CardContent>
    </Fragment>
  );
  const sleepCard = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={"center"}gutterBottom>
          Your Sleep
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {sleep}
        </Typography>

        <Typography variant="body2"textAlign={"center"}>
          Hours of Sleep
          <br />
        </Typography>
      </CardContent>
    </Fragment>
  );
  const moodCard = (
    <Fragment>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={"center"}gutterBottom>
          Your Mood
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {mood}
        </Typography>

        {/* <Typography variant="body2">
          Body 2 text
          <br />
          {'"text"'}
        </Typography> */}
      </CardContent>
    </Fragment>
  );
  const energyCard = (
    <Fragment>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={"center"}gutterBottom>
          Your Energy
        </Typography>
        <Typography variant="h5" component="div"textAlign={"center"}>
          {energy}
        </Typography>

        {/* <Typography variant="body2">
          Body 2 text
          <br />
          {'"text"'}
        </Typography> */}
      </CardContent>
    </Fragment>
  );
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginBottom="20px"
      >
        <Typography align="center" fontSize="32px" fontWeight="bold">
          My Wellness
        </Typography>

        <Typography variant="body1">
          Your mental health takes in many factors, including your mood, sleep,
          energy, and thoughts. We at Namaste Wellness endeavor to share a
          journal oo these for your personal insight and to share with your
          healthcare professionl. The journal is a way to hod on to the
          information that molds our mental health. We can track your mood daily
          with simple terms which may best embody your current state. Your sleep
          as we know effects our physical and mental health. Getting the rest we
          need may not always be attainable, lets track how that effects your
          mood. Your energy, we belove is a direct relation to your overall mood
          and behaviors. Seeing the correation between sleep, enery and moods we
          finalize that moment with a short journal entry to capture that days
          feeling.
        </Typography>
      </Grid>
      <Typography align="center" fontSize="32px" fontWeight="bold">
        Your Journal
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
        columnSpacing={20}
        style={{ maxWidth: "1600px" }}
        marginTop="20px"
        marginBottom="50px"
      >
        <Grid item>
          <MoodButton />
        </Grid>
        <Grid item>
          <SleepButton />
        </Grid>
        <Grid item>
          <ThoughtsButton />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
        columnSpacing={20}
        style={{ maxWidth: "1600px" }}
        marginTop="20px"
        marginBottom="50px"
      >
        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{moodCard}</Card>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{sleepCard}</Card>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{energyCard}</Card>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{quoteCard}</Card>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default MyWellness;
