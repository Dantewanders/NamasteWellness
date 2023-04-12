import React, { useState } from "react";
import { getToken } from "../utility/utils";
import { submitJournal } from "../utility/api";
import { TextField } from "@mui/material";

function JournalContainer() {
  const [thoughts, setThoughts] = useState("");
  const handleSubmitJournal = (event) => {
    event.preventDefault(); // Prevents the default action of reloading the page from happening (e.g. submitting a form)
    const token = getToken(); // Get the token from local storage
    const journalPayload = {
      // Create a payload object
      thoughts,
      sleepDuration: localStorage.getItem("Sleep"),
      mood: localStorage.getItem("Mood"),
      energy: localStorage.getItem("Energy"),
    };
    submitJournal(token, journalPayload)
      .then((response) => {
        console.log(response);
        alert("Journal submitted successfully!");
        //redirect after a deley to my wellness page
        setTimeout(() => {
          window.location.href = "/mywellness";
        }, 2000);

      })
      //maybe add asnackbar here
      .catch((err) => console.log("Unable to submit journal"));
  };

  return (
    <div>
      <form onSubmit={handleSubmitJournal}>
        <label>
          <TextField
            fullWidth
            label="Journal"
            variant="filled"
            color="success"
            focused
            id="fullWidth box"
            multiline
            maxRows={45}
            type="text"
            name="entry"
            onChange={(e) => setThoughts(e.target.value)}
          />
        </label>
        <br />
        <br />
        <br />
        <button type="submit">Submit your Journal</button>
      </form>
    </div>
  );
}
export default JournalContainer;
