import { NextApiRequest, NextApiResponse } from 'next'

import connectToDatabase from '../../services/databaseConnection'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { email } = request.body

  const db = await connectToDatabase('newsletter', process.env.MONGODB_NEWSLETTER_URI)
  const collection = db.collection('subscribers')

  email.toLowerCase()
  await collection.insertOne({
    email,
    subscribeAt: new Date()
  })

  // console.log('[test] Emails has been inserted')
  response.status(201).json({ ok: true })
}
