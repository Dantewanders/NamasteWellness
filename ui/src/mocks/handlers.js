import { rest } from 'msw'

// ** mock data JSON
// import leaderboard from './data/leaderboard.json'

// Set URL to mock
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  // rest.get(`${baseUrl}/user/token`, (req, res, ctx) => { // capture "GET /greeting" requests
   
  //   return res(ctx.json({username: "dantewanders"})) // respond using a mocked JSON body
  // }),
  // rest.get(`${baseUrl}/leaderboard`, (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json(leaderboard)) // respond using a mocked JSON body
  // }),
  // rest.get(`${baseUrl}/leaderboard`, (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json(leaderboard)) // respond using a mocked JSON body
  // }),
  // rest.get(`${baseUrl}/questions/random`, (req, res, ctx) => { // capture "GET /greeting" requests
  //   const result = getQuestion[Math.floor(Math.random()*getQuestion.length)]
  //   return res(ctx.json(result)) // respond using a mocked JSON body
  // }),
  // rest.get(`${baseUrl}/user/:username`, (req, res, ctx) => { // capture "GET /greeting" requests
   
  //   return res(ctx.json(getUserProfile)) // respond using a mocked JSON body
  // }),

  // rest.get(`${baseUrl}/game/:username`, (req, res, ctx) => { // capture "GET /greeting" requests
  
  //   return res(ctx.json(getGameHistory)) // respond using a mocked JSON body
  // }),
  // rest.get(`${baseUrl}/stats/:username`, (req, res, ctx) => { // capture "GET /greeting" requests
  
  //   return res(ctx.json(getGameStatistics)) // respond using a mocked JSON body
  // }),
  // rest.get('/farewell', (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json({farewell: 'goodbye there'})) // respond using a mocked JSON body
  // })
]