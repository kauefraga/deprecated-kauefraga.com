import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../services/databaseConnection'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { username } = request.body

  const db = await connectToDatabase('app', process.env.MONGODB_APP_URI)
  const collection = db.collection('users')

  const user = await collection.findOne({ username })

  if (!user) return response.status(401).json({ error: 'User not found' })

  response.setHeader('Cache-Control', 's-maxage=360, stale-while-revalidate')
  response.status(200).json({ user })
}
