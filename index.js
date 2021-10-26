const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = 7000;

app.get('/', (req, res) => {
    res.send('WOW I am Excited learning node and express ')
})

const users = [
    { id: 0, name: 'sefat', email: 'sefat@gmail.com' },
    { id: 1, name: 'sinthiya', email: 'sinthiya@gmail.com' },
    { id: 2, name: 'rifat', email: 'rifat@gmail.com' },
    { id: 3, name: 'arafat', email: 'arafat@gmail.com' },
    { id: 4, name: 'juel', email: 'juel@gmail.com' },
    { id: 5, name: 'nasir', email: 'nasir@gmail.com' }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // search query parameter
    if (search) {
        res.send(users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
    }
    else {
        res.send(users)
    }
    res.send(users)
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// search query parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli')
})

app.listen(port, () => {
    console.log('Listening to port ', port);
})