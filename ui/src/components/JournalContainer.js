import React, { useState } from 'react';
import { isUserLoggedIn, getToken } from "../utility/utils";
import { submitJournal } from '../utility/api'


function JournalContainer () {
    const [thoughts, setThoughts] = useState("");
    const handleSubmitJournal = (event) => {
        event.preventDefault();
        const token = getToken();    
        const journalPayload = {
            thoughts,
            sleepDuration: localStorage.getItem("Sleep"),
            mood: localStorage.getItem("Mood"),
            energy: localStorage.getItem("Energy"),
        }
        submitJournal(token, journalPayload)
        .then((response) => {
            console.log(response)
            alert("Journal submitted successfully!")
        })
        .catch((err) => console.log("Unable to submit journal"))
    }
     
    return (
            <div>
                <h1>My Thoughts Today</h1>
                
                <form onSubmit={handleSubmitJournal}>
                    <label>
                        Journal Entry:
                        <input type="text" name="entry" onChange={(e) => setThoughts(e.target.value)} />
                    </label>
                    <button type="submit">Submit your journal</button>
                </form>
            </div>
        );
    }
export default JournalContainer;
