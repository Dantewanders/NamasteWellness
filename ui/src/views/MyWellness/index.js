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
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { getMyJournal, getsQuote } from "../../utility/api";
import { getToken } from "../../utility/utils";

function MyWellness() {
  const [sleep, setSleep] = useState("");
  const [mood, setMood] = useState("");
  // const [thoughts, setThoughts] = useState("");
  const [energy, setEnergy] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // const [dateCreated, setDateCreated] = useState("");
  const navigate = useNavigate();

  const getJournal = async () => {
    const token = getToken();
    const response = await getMyJournal(new Date(), token);
    const result = await response.json();
    console.log("res", result);
    // setDateCreated(result[0].dateCreated);
    setSleep(result[0].sleepDuration);
    setMood(result[0].mood);
    // setThoughts(result[0].thoughts);
    setEnergy(result[0].energy);
  };

  const getQuote = async () => {
    const response = await getsQuote();
    const result = await response.json();
    console.log("result", result);
    setAuthor(result[0].author);
    setQuote(result[0].quote);

    console.log(result);
  };

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
    getJournal();
    getQuote();
  }, []);

  const quoteCard = (
    <Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          textAlign={"center"}
          gutterBottom
        >
          Quote of the Day
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {quote}
        </Typography>

        <Typography variant="body2">
          <br />
          {author}
        </Typography>
      </CardContent>
    </Fragment>
  );
  const sleepCard = (
    <Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          textAlign={"center"}
          gutterBottom
        >
          Hours of Sleep
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {sleep}
        </Typography>
      </CardContent>
    </Fragment>
  );
  const moodCard = (
    <Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          textAlign={"center"}
          gutterBottom
        >
          Your Mood
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {mood}
        </Typography>
      </CardContent>
    </Fragment>
  );
  const energyCard = (
    <Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          textAlign={"center"}
          gutterBottom
        >
          Your Energy
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {energy}
        </Typography>
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
        marginTop="20px"
      >
        <Typography
          align="center"
          fontSize="32px"
          fontWeight="bold"
          mb={3}
        ></Typography>

        <Card sx={{ maxWidth: 1000, borderRadius: "25px", opacity: "inherit" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              My Wellness
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your mental health takes in many factors, including your mood,
              sleep, energy, and thoughts. We at Namaste Wellness endeavor to
              share a journal that tracks these factors for your personal
              insight and/or to share with your healthcare professional. The
              journal is a way to hold on to the information that molds our
              mental health. We can track your mood daily, with simple terms
              which may best embody your current state. Your sleep as we know
              effects our physical and mental health. Getting the rest we need
              may not always be attainable, lets track how that effects your
              mood. Your energy, we know is a direct relation to your overall
              mood and behaviors. Seeing the correlation between sleep, energy
              and moods we hold that moment with a short journal entry to
              capture that days feelings.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Typography align="center" fontSize="32px" fontWeight="bold">
        Todays Vision
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
            <Card variant="outlined" >{quoteCard}</Card>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default MyWellness;
