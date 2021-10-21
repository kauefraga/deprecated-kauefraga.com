import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'

let cachedDb: Db = null

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri)

  const dbName = 'newsletter'
  const db = client.db(dbName)

  cachedDb = db

  return db
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { email } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('subscribers')

  await collection.insertOne({
    email,
    subscribeAt: new Date()
  })

  console.log('[test] Emails has been inserted')
  response.status(201).json({ ok: true })
}
