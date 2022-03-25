import { NextApiRequest, NextApiResponse } from 'next'

export default (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  return response.json({
    message: 'Hello World',
    routes: [
      'api/physics/celsius_to_kelvin',
      '...'
    ]
  })
}
