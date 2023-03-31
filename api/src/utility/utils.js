exports.getSeedQuestions = () => {

  const data = require('../assets/questions.json')

  let newArray = data.map((element) => {

    // console.log(element)
    
    let properties = {
      // "question_id": element.id,
      // "question": element.question.replace('\\\"', '"'),
      // "difficulty": element.difficulty,
      // "category": element.category,
      // "correctAnswer": element.correctAnswer.replace('\\\"', '"'),
      // "incorrectAnswer1": element.incorrectAnswers[0].replace('\\\"', '"'),
      // "incorrectAnswer2": element.incorrectAnswers[1].replace('\\\"', '"'),
      // "incorrectAnswer3": element.incorrectAnswers[2].replace('\\\"', '"'),
    }
    return properties
   }) 
  // console.log(newArray)
   return newArray

}