import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import BigButton from "../../components/BigButton";
import "./index.css";

function Home(props) {
  return (
    <Fragment>
      {/* <Grid m='50px'>

        

        <Grid item>
          <Typography variant="h5" fontWeight='bold' mt='20px'>
            About the text
          </Typography>

          
            </Grid>
                    <Box align='center'>
          <Box
            component="img"
            sx={{ width: '650px', justifyContent: 'center', boxShadow: '3px 2px 7px rgb(0, 0, 0, 0.3)', borderRadius: '15px' }}
            alt='Example screenshot'
            src='/screenshot.png'
          />
        </Box>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" mt='30px' mb="15px">
            Mood
          </Typography>

          <BigButton />
        </Grid>

      </Grid> */}
    </Fragment>
  );
}

export default Home;
