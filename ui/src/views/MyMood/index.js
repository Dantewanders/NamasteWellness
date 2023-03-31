import React from "react";
import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { isUserLoggedIn } from "../../utility/utils";
import Mood from "../MyMood";
import MyWellnessButton from "../../components/MyWellnessButton";
import "./index.css";

function MyMood() {

    const [Mood, setMood] = useState("")//this is to select my mood
    const [errorMsg, setErrorMsg] = useState("")//this is to display my error message
    const [isChoosing, setIsChoosing] = useState(false)

    const navigate = useNavigate()
    //this checks if the user is logged in

    useEffect(() => {
    if (!isUserLoggedIn()) {
        navigate("/login");
    }
    }, []);

    const handleStart = () => {
    if (!Mood) {
        return setErrorMsg("Please select your Mood before continuing.");
    }
      console.log(`Mood: ${Mood}`);
    setIsChoosing(true)
    }
    
    const handleSelectMood = (selected) => {
    setMood(selected)
   
    if (Mood === selected) {
        setMood("")
        }//this is to select the mood
    }
    if (isChoosing) {
        return (
        <MyMood 
            Mood={Mood} //this is to pass the mood to the next page
            />
        )
    }
  
//send selected button to the database in the journals table
// const handleSave = () => {

// }

    return (
        <Fragment>
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >

            <Grid item mt='20px'>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                >

                <Typography align="center" fontSize="32px" fontWeight="bold">
                How do feel today?
            </Typography>

        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            columnSpacing={2}
            style={{ maxWidth: "950px" }}
            marginTop="50px"
        >
            <Grid item>
            <Button
                variant="contained"
                onClick={() => handleSelectMood("Happy")}
                color={Mood === "Happy" ? "success" : "primary"}
            >
                <Typography fontWeight="bold">Happy</Typography>
            </Button>
            </Grid>
            <Grid item>
            <Button
                variant="contained"
                onClick={() => handleSelectMood("Positive")}
                color={Mood === "Positive" ? "success" : "primary"}
            >
                <Typography fontWeight="bold">Positive</Typography>
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
                <Typography fontWeight="bold">Sad</Typography>
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
        <Grid align='center' mt='40px'>

            <Typography color='red' fontSize='18px' mb='15px'>
                {errorMsg}
            </Typography>
            
            <Button
                variant='contained'
                color='secondary'
                onClick={handleStart}
            >

                <Typography fontWeight='bold' fontSize='15px'>
                Namaste
                </Typography>
                
            </Button> 
            

            </Grid>
            
            </Grid>
        
        </Fragment>
    )
}//use the button submit to database and link to MyWellness page

export default MyMood
