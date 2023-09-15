async function handler(req, res) {

    const eventId = req.query.eventId;
  
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
  
      res.status(201).json({ message: 'Added comment.', comment: newComment });


    if (req.method === 'GET') {
        
      const dummyList = [
        {id: 'oo', name:' max' , text: 'Top is the goal'},
        {id: 'op', name:' max' , text: 'Top is the goal'}
      ]

      res.status(200).json({ comments: dummyList });
  
    }
  }
}
export default handler

