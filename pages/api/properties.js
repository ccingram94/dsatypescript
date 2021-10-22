import { connect } from 'mongoose'
import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
    const {db} = await connectToDatabase();
}