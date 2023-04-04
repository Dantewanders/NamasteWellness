import React from "react";
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

function MyWellness() {
  const navigate = useNavigate();
  //this checks if the user is logged in

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
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
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography variant="h5" component="div">
          test text
        </Typography>

        <Typography variant="body2">
          Body 2 text
          <br />
          {'"text"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Fragment>
  );
  const sleepCard = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your Sleep
        </Typography>
        <Typography variant="h5" component="div">
          test text
        </Typography>

        <Typography variant="body2">
          Body 2 text
          <br />
          {'"text"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Fragment>
  );
  const moodCard = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your Mood
        </Typography>
        <Typography variant="h5" component="div">
          test text
        </Typography>

        <Typography variant="body2">
          Body 2 text
          <br />
          {'"text"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Fragment>
  );
  const energyCard = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your Energy
        </Typography>
        <Typography variant="h5" component="div">
          test text
        </Typography>

        <Typography variant="body2">
          Body 2 text
          <br />
          {'"text"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
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
