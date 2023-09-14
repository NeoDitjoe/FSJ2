export function handler(req, res){
    const eventId = req.query.eventId

    if(req.method === 'POST'){

        const { name, email, text} = req.body;
        if(!name){
            res.status(422).json({ message: " Invalid Input"});
        }

        const newComment = {
            id: new Date().toISOString(),
            name,
            email,
            text

        }

        res.status(201).json({ message: newComment})
    }

    if(req.method === 'GET'){ 

        const dummyList = [
            {id: 'oo', name:' max' , comment: 'Top is the goal'}
        ]

        res.status(202).json({ message: 'this is the comment' +dummyList})
    }
}