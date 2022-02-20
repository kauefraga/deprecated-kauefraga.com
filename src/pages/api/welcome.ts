import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({
    message: 'Welcome! 👋',
    author: 'Kauê Fraga Rodrigues <kauefragarodrigues456@gmail.com>'
  })
}
