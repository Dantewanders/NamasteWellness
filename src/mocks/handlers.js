import {rest} from 'msw'

export const handlers = [
    // rest.get('/greeting', (req, res, ctx) => { // capture "GET /greeting" requests
    //     return res(ctx.json({greeting: 'hello there'})) // respond using a mocked JSON body
    //   }),
    //   rest.get('/farewell', (req, res, ctx) => { // capture "GET /greeting" requests
    //     return res(ctx.json({farewell: 'goodbye there'})) // respond using a mocked JSON body
    //   })
]