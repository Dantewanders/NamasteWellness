import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import MyWellnessButton from "../../components/MyWellnessButton";
import "./index.css";

function Home(props) {
  return (
    <Fragment>
      <Grid m="50px">
        <Grid item>
          <Typography variant="h5" fontWeight="bold">
            Monitoring your mood
          </Typography>

          <Typography variant="body1">
            Understanding your mood helps you manage your emotions and feel
            better. If you are more aware of your moods, you may be able to
            better manage your lifestyle, make informed decisions, prevent or
            avoid triggers, and work towards a better quality of life. The trick
            is to watch for changes in your mood, particularly any very high
            swings or very low dips. Self-monitoring your mood with Namaste
            Wellness takes hardly any time. And as you make it part of your
            daily routine you'll find it becomes very simple. Namaste Wellness
            provides graphical analysis of your posts over time, helping to find
            and identify patterns and to help you focus on what matters.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" fontWeight="bold" mt="20px">
            Overview
          </Typography>

          <Typography variant="body1">
            Most people know when they are feeling down. But do you know what it
            means, where your mood comes from or how to move towards a happier
            mindset? Understanding your moods may help you work out what causes
            them and how you behave when you are in different emotional states.
            Your moods are a big part of how you choose to behave and think. A
            negative mood can be a useful indicator of a problem that needs to
            be addressed.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" fontWeight="bold" mt="20px">
            What affects your mood?
          </Typography>

          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="18px"
            mt="3px"
          >
            Categories:
          </Typography>

          <Box width="400px">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} mt="3px">
              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Sleep</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>The News</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Stress</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Work</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Family</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Money</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Diet & Hunger</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Hormones</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>
                  Physical Health
                </ListItem>
              </Grid>
              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Past Trauma</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>
                  Current Trauma
                </ListItem>
              </Grid>
            </Grid>
          </Box>

          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="18px"
            mt="20px"
          >
            Possible causes of a negative mood may include:
          </Typography>

          <Box width="400px">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} mt="3px">
              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Poor Sleep</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Depression</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>
                  Substance Abuse
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Medication</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>
                  Physical Illness
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>
                  Poor Nutrition
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>
                  Relationship Issues
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>Anxiety</ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: "list-item" }}>
                  Bipolar Disorder
                </ListItem>
              </Grid>
            </Grid>
          </Box>

          <Typography
            component={Link}
            to="/MyMood"
            variant="subtitle"
            color="grey"
            className="link"
          >
          Namaste Wellness can help in a simple yet intuitive way.
          Let us help monitor your mental health in various ways, for a personal insight or to share with your health care professional.
          </Typography>

          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="18px"
            mt="20px"
          >
            My Wellness Categories:
          </Typography>

          <Box width="800px" mt="10px" ml="20px">
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>Mood</ListItem>
            </Grid>

            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>Sleep</ListItem>
            </Grid>

            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>Thoughts</ListItem>
            </Grid>
          </Box>
        </Grid>

        <Box align="center" mb="10px">
          <Typography variant="body1">See how it works!</Typography>
        </Box>

        <Box align="center">
          <Box
            component="img"
            sx={{
              width: "650px",
              justifyContent: "center",
              boxShadow: "3px 2px 7px rgb(0, 0, 0, 0.3)",
              borderRadius: "15px",
            }}
            alt="Example gameplay"
            src="/screenshot.png"
          />
        </Box>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" mt="30px" mb="15px">
            Lets get started with your Wellness Today!
          </Typography>

          <MyWellnessButton />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
