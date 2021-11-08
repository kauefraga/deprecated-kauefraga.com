import { MongoClient, Db } from 'mongodb'

let cachedDb: Db = null

export default async function connectToDatabase(databaseName: string, uri: string) {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri)
  const dbName = databaseName
  const db = client.db(dbName)

  cachedDb = db

  return db
}
