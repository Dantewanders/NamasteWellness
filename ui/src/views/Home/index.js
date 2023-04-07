import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import MyWellnessButton from "../../components/MyWellnessButton";
import "./index.css";
import screenshot from "../../Images/NamasteScreenshot.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import smiley from "../../Images/smiley.jpg";

function Home(props) {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="column"
          align="center"
          margin={2}
          spacing={4}
          marginTop="20px"
        >
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                align: "center",
                maxWidth: 800,
                borderRadius: "25px",
                opacity: "inherit",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Monitoring your mental health
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Understanding your mental health helps you manage your
                  emotions and feel better. If you are more aware of your mental
                  health, you may be able to better manage your lifestyle, make
                  informed decisions, prevent or avoid triggers, and work
                  towards a better quality of life. The trick is to watch for
                  changes in your mood, particularly any very high swings or
                  very low dips. Self-monitoring your mental health with Namaste
                  Wellness takes hardly any time. And as you make it part of
                  your daily routine you'll find it becomes very simple. Namaste
                  Wellness provides graphical analysis of your posts over time,
                  helping to find and identify patterns and to help you focus on
                  what matters.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box align="center">
        <Grid container 
        direction="row" 
        margin={2} 
        spacing={4} 
        marginTop="20px">

          <Grid item xs={8} sm={5}>
            <Card
              sx={{
                maxWidth: 600,
                borderRadius: "25px",
                opacity: "inherit",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Overview
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Most people know when they are feeling down. But do you know
                  what it means, where your mood comes from or how to move
                  towards a happier mindset? Understanding your moods may help
                  you work out what causes them and how you behave when you are
                  in different emotional states. Your moods are a big part of
                  how you choose to behave and think. A negative mood can be a
                  useful indicator of a problem that needs to be addressed.
                </Typography>
                <CardMedia
                  component="img"
                  height="auto"
                  image={smiley}
                  alt="Smiley"
                />
              </CardContent>
            </Card>{" "}
          </Grid>
        </Grid>
        <Box align="center">
          <Grid
            container
            direction="row"
            margin={2}
            spacing={4}
            marginTop="20px"
          >
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  maxWidth: 600,
                  borderRadius: "25px",
                  opacity: "inherit",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    What affects your mood?
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1 }}
                      mt="3px"
                    >
                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>Sleep</ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          The News
                        </ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          Stress
                        </ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>Work</ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          Family
                        </ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>Money</ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          Diet & Hunger
                        </ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          Hormones
                        </ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          Physical Health
                        </ListItem>
                      </Grid>
                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          Past Trauma
                        </ListItem>
                      </Grid>

                      <Grid item xs={6}>
                        <ListItem sx={{ display: "list-item" }}>
                          Current Trauma
                        </ListItem>
                      </Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>{" "}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  maxWidth: 600,
                  borderRadius: "25px",
                  opacity: "inherit",
                  marginTop: "20px",
                  padding: "10px",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Possible causes of a negative mood may include:
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1 }}
                      mt="3px"
                    >
                      <Box width="600px">
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ xs: 1 }}
                          mt="3px"
                        >
                          <Grid item xs={6}>
                            <ListItem sx={{ display: "list-item" }}>
                              Poor Sleep
                            </ListItem>
                          </Grid>

                          <Grid item xs={6}>
                            <ListItem sx={{ display: "list-item" }}>
                              Depression
                            </ListItem>
                          </Grid>

                          <Grid item xs={6}>
                            <ListItem sx={{ display: "list-item" }}>
                              Substance Abuse
                            </ListItem>
                          </Grid>

                          <Grid item xs={6}>
                            <ListItem sx={{ display: "list-item" }}>
                              Medication
                            </ListItem>
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
                            <ListItem sx={{ display: "list-item" }}>
                              Anxiety
                            </ListItem>
                          </Grid>

                          <Grid item xs={6}>
                            <ListItem sx={{ display: "list-item" }}>
                              Bipolar Disorder
                            </ListItem>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Grid item>
          <Typography textAlign="center" padding={5}>
            <h5>
              Namaste Wellness can help in a simple yet intuitive way. Let us
              help monitor your mental health, for a personal insight or to
              share with your health care professional.
            </h5>
          </Typography>
        </Grid>
      </Box>

      <Box align="center">
        <Box
          component="img"
          sx={{
            width: "650px",
            justifyContent: "center",
            boxShadow: "3px 2px 7px rgb(0, 0, 0, 0.3)",
            borderRadius: "25px",
          }}
          alt="Namaste Wellness Screenshot"
          img
          src={screenshot}
        />
        {/* <Typography>
            <img src={sleep} alt="sleep" />
          </Typography> */}
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
    </Fragment>
  );
}

export default Home;
