import { NextApiRequest, NextApiResponse } from 'next'

import connectToDatabase from '../../../services/databaseConnection'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { email } = request.body

  const db = await connectToDatabase('newsletter', process.env.MONGODB_NEWSLETTER)
  const collection = db.collection('subscribers')

  await collection.insertOne({
    email: email.toLowerCase(),
    createdAt: new Date()
  })

  response.status(201).json({ message: "Email has been inserted" })
}
