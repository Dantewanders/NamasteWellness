const { showJournalsByUsername, createJournal} = require('../service/journal')

exports.getJournalsByUsername = async (req, res) => {
  
  try {
   
    const moods = await showJournalsByUsername(req.params.username)
    
    res.json(moods)
    

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

exports.addJournal = async (req, res) => {

  console.log(req.body)

  const journalPayload = {
    ...req.body,
    user_id: req.userId
  }

  try {
    
    const result = await createJournal(journalPayload)
    
    res.json(result)

  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }

}