import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../services/databaseConnection'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { username, socialUsername, createdAt } = request.body

  const db = await connectToDatabase('app', process.env.MONGODB_APP_URI)
  const collection = db.collection('users')

  if (await collection.findOne({ username })) {
    return response.status(401).json({ error: 'User already exists' })
  }

  const user = await collection.insertOne({ username, socialUsername, createdAt })

  return response.status(200).json({ user })
}
