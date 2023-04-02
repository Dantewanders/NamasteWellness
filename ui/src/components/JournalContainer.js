import React, { Component } from 'react';
import { isUserLoggedIn, getToken } from "../utility/utils";
import { updateMood } from '../utility/api'


function JournalContainer () {
    const submitJournal = () => {
        // const token = getToken();    
        // const journalPayload = {
        //     mood,
        //     energy,
        //     thoughts,
        //     sleepDuration
        // }
        // updateMood(token, journalPayload)
        // .then((response) => {
        //     console.log(response)
        //     alert("Journal submitted successfully!")
        // })
        // .catch((err) => console.log("Unable to submit journal"))
    }
     
    return (
            <div>
                <h1>My Thoughts Today</h1>
                
                <form>
                    <label>
                        Journal Entry:
                        <input type="text" name="entry" />
                    </label>
                    <button type="submit" onClick={() => submitJournal()}>Submit your journal</button>
                </form>
            </div>
        );
    }
export default JournalContainer;
