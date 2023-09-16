import { MongoClient } from "mongodb";

export default async function handler(req, res){

    const eventId = req.query.eventId;
    const client = await MongoClient.connect('mongodb+srv://Cozy4real:mmmmmm@cluster0.kq0haj9.mongodb.net/events?retryWrites=true&w=majority')
  
    if (req.method === 'POST') {
      const { email, name, text } = req.body;
  
      if (
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !text ||
        text.trim() === ''
      ) {
        res.status(422).json({ message: 'Invalid input.' });
        return;
      }
  
      const newComment = {
        email,
        name,
        text,
        eventId,
      };

      const db = client.db()
      const result = await db.collection('comments').insertOne(newComment)
      console.log(result)

      res.status(201).json({ message: 'Added comment.', comment: newComment });

  }

  if (req.method === 'GET') {
        
    const dummyList = [
      {
        id: 'oo',
        name:' max' , 
        text: 'Top is the goal'
      },

      {
        id: 'op', 
        name:' max' , 
        text: 'Top is the goal'
      }

    ]

    res.status(200).json({ comments: dummyList });

  }

  client.close()
}

