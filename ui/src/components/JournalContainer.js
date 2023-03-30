import React, { Component } from 'react';



function JournalContainer () {
    return (
            <div>
                <h1>My Feelings Today</h1>
                
                <form>
                    <label>
                        Journal Entry:
                        <input type="text" name="entry" />
                    </label>
                    <button type="submit">Store your thoughts</button>
                </form>
            </div>
        );
    }
export default JournalContainer;
