import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../utility/utils";
import { deleteJournal, getMyJournal, } from "../../utility/api";
import { getToken } from "../../utility/utils";
import BigButton from "../../components/HomeButton";
import SearchForm from "../../components/SearchForm";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import moment from "moment";


function MyJournals(){
const [journal, setJournal] = useState(null);
  const navigate = useNavigate();
  const token = getToken();
  

  useEffect(() => {

    if (!isUserLoggedIn()) {
      navigate("/login");
    }

    getMyJournal(new Date(), token);
    
  }, []);

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
          {journal?.sleepDuration}
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
          {journal?.mood}
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
          {journal?.energy}
        </Typography>
      </CardContent>
    </Fragment>
  );
  const thoughtsCard = (
    <Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          textAlign={"center"}
          gutterBottom
        >
          Your Thoughts
        </Typography>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {journal?.thoughts}
        </Typography>
      </CardContent>
    </Fragment>
  );

  const handleSearchJournal = async (choosenDate) => {
    const token = getToken();
    const response = await getMyJournal(choosenDate, token);
    const result = await response.json();

    if(result?.length === 0) {
        setJournal(null);
        return;
    }
    setJournal(result[0]);
}

const handleDeleteJournal = async () => {
    const token = getToken();
    const response = await deleteJournal(journal?.journal_id, token);
  // refresh the page
    window.location.reload();   
}

  return (
    <Fragment>
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography 
      align="center" 
      fontSize="32px" 
      fontWeight="bold" 
      padding={2}>
        My Journals
      </Typography>
      <br></br>
      <Card sx={{ minWidth: 375, maxWidth: 1075, borderRadius: "25px", justifyContent: "center" }}>
      <CardContent>            
        <SearchForm onValueChange={handleSearchJournal} /> 
      </CardContent>
  
    </Card>
    </Grid>
    

    {journal ? (
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
            <Card sx={{ minWidth: 275, maxWidth: 1075, borderRadius: "25px" }}>{moodCard}</Card>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Card sx={{ minWidth: 275, maxWidth: 1075, borderRadius: "25px" }}>{sleepCard}</Card>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Card sx={{ minWidth: 275, maxWidth: 1075, borderRadius: "25px" }}>{energyCard}</Card>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 475 }}>
            <Card sx={{ minWidth: 475, maxWidth: 1075, borderRadius: "25px" }}>{thoughtsCard}</Card>
          </Box>
        </Grid>
        
    </Grid>
    
    ):(
        <Typography>No Journal for the selected date.</Typography>
    )}
    
    <Grid item
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    >
      {journal && (
    <Button variant="contained"  onClick={() =>handleDeleteJournal() }>Delete Journal</Button>
    )}
    <br>
    </br>
       <BigButton/>
       </Grid>
     
    </Fragment>
    );}
    export default MyJournals;
   


