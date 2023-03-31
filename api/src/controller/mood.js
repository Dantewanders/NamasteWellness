const { showMoodsByUsername, createMood} = require('../service/mood')

exports.getMoodsByUsername = async (req, res) => {
  
  try {
   
    const games = await showMoodsByUsername(req.params.username)
    
    res.json(moods)
    

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

exports.addMood = async (req, res) => {

  console.log(req.body)

  const mood = req.body
  mood.user_Id = req.userId

  try {
    
    const result = await createMood(mood)
    
    res.json(result)

  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }

}