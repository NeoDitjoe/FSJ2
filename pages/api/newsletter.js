import { MongoClient } from "mongodb";

export default async function handler(req, res){
    if (req.method === 'POST'){
        const userEmail = req.body.email;

        if ( !userEmail || !userEmail.includes('@')){
            res.status(422).json({ message: " Invalid email address"});
        }

        const client = await MongoClient.connect('mongodb+srv://Cozy4real:mmmmmm@cluster0.kq0haj9.mongodb.net/events?retryWrites=true&w=majority')

        const db = client.db();
        await db.collection('newsletter').insertOne({ email: userEmail })

        client.close();

        res.status(201).json({ message : 'signed up'})
    }

    if( req.method === 'GET'){
        res.status(201).json({ message : 'signed up'})
    }
}
