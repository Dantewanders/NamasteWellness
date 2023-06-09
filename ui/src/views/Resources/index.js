import React from "react";
import { Fragment } from "react";
import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import MyWellnessButton from "../../components/MyWellnessButton";
import ListItem from "@mui/material/ListItem";
import "./index.css";

function Resources() {
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt="40px"
      >
        <Grid item maxWidth={10}>
          <Typography variant="h5" fontWeight="bold" mb="30px">
            Finding Help: When to Get It and Where to Go
          </Typography>

          <Typography variant="body1" mb="20px" maxWidth={1300}>
            Mental health disorders are real, common and often treatable. It is
            estimated that approximately 1 in 5 American adults (nearly 44
            million people) and 18% of children living in the United States
            will experience a diagnosable mental health disorder in a given
            year. The following are signs that your loved one may want to speak
            to a medical or mental health professional.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{ maxWidth: 1600, borderRadius: "25px", opacity: "inherit" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Adults
              </Typography>
              <Typography variant="body2" color="text.secondary">
                
                <Grid container rowSpacing={0} columnSpacing={12} mt="3px">
                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Confused Thinking
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Prolonged depression (sadness or irritability)
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Excessive fears, worries and anxieties
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Dramatic changes in eating or sleeping habits
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Strong feelings of anger
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Delusions or hallucinations
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Inability to cope with daily problems and
                      activities
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Denial of obvious problems
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Numerous unexplained physical ailments
                    </ListItem>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Past Trauma
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Substance abuse
                    </ListItem>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Suicidal thoughts
                    </ListItem>
                  </Grid>
                </Grid>
                {/* </Box> */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              maxWidth: 1600,
              borderRadius: "25px",
              opacity: "inherit",
              marginTop: "20px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Adolescents & Young Adults
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Grid container rowSpacing={0} columnSpacing={4} mt="3px">
                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Substance abuse
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Inability to cope with problems and daily activities
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Changes in sleeping and/or eating habits
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Excessive complaints of physical ailments
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Defiance of authority, truancy, theft, and/or vandalism
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Prolonged negative mood (depression or irritability)
                    </ListItem>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Loss of appitite and thoughts of death
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Frequent outbursts of anger
                    </ListItem>
                  </Grid>

                  <Grid item xs={4}>
                    <ListItem sx={{ display: "list-item" }}>
                      Intense fear of weight gain
                    </ListItem>
                  </Grid>
                </Grid>
                {/* </Box> */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              maxWidth: 1600,
              borderRadius: "25px",
              opacity: "inherit",
              marginTop: "20px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Younger Children & Pre-Adolescents
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Grid container rowSpacing={0} columnSpacing={4} mt="3px">
                  
                    <Grid item xs={4}>
                      <ListItem sx={{ display: "list-item" }}>
                        Changes in school performance
                      </ListItem>
                    </Grid>

                    <Grid item xs={4}>
                      <ListItem sx={{ display: "list-item" }}>
                        Poor grades despite strong efforts
                      </ListItem>
                    </Grid>

                    <Grid item xs={4}>
                      <ListItem sx={{ display: "list-item" }}>
                        Excessive anxiety (refusing to go to bed
                        or school)
                      </ListItem>
                    </Grid>

                    <Grid item xs={4}>
                      <ListItem sx={{ display: "list-item" }}>
                        Hyperactivity
                      </ListItem>
                    </Grid>

                    <Grid item xs={4}>
                      <ListItem sx={{ display: "list-item" }}>
                        Persistent nightmares
                      </ListItem>
                    </Grid>

                    <Grid item xs={4}>
                      <ListItem sx={{ display: "list-item" }}>
                        Persistent disobedience or aggression
                      </ListItem>
                    </Grid>

                    <Grid item xs={4}>
                      <ListItem sx={{ display: "list-item" }}>
                        Frequent temper tantrums
                      </ListItem>
                    </Grid>
                  
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="18px"
            mt="20px"
          >
            Helplines:
          </Typography>

          <Box width="800px" mt="10px" ml="20px">
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://988lifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  988 Suicide & Crisis Lifeline (formerly known as the National
                  Suicide Prevention Lifeline) DIAL 988
                </a>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://www.thehotline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Domestic Violence Hotline 800-799-7233
                </a>
              </ListItem>
              <Grid item xs={12}>
                <ListItem sx={{ display: "list-item" }}>
                  <a
                    href="https://www.rainn.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The National Sexual Assault Hotline 800-656-HOPE
                  </a>
                </ListItem>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://www.d2l.org/get-help/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Darkness to Light (Child Abuse Hotline) 866-FOR-LIGHT
                </a>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://www.veteranscrisisline.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veterans Crisis Line Dial 988 then PRESS 1
                </a>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://translifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trans Lifeline 877-565-8860
                </a>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://www.thetrevorproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Trevor Project (Suicide Hotline for LGBTQ+ Youth)
                  866-488-7386
                </a>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://www.nami.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NAMI National Alliance on Mentall Illness 800-950-NAMI
                </a>
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <ListItem sx={{ display: "list-item" }}>
                <a
                  href="https://adaa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anxiety and Depression Association of America (ADAA)
                </a>
              </ListItem>
            </Grid>
          </Box>
        </Grid>
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

export default Resources;
