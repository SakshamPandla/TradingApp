const express = require('express')
// const abc = require('./xyz') this is to import a module which is outside the node modules
const app = express()
// GET, POST, PUT, DELETE
const person = [
    {
        name : 'Saksham Pandla',
        id : 1,
        email : 'sakshampandla@gmail.com'
    },
    {
        name : 'Ishika Kochhar',
        id : 2,
        email : 'kochharishika@gmail.com'
    }
]
app.get('/alluser', (req,res)=> {
    try {
        res.send(person)
    } catch (error) {
        res.send('Error')
    }
})
app.get('/alluser/:name', (req,res)=> {
    try {
        let name = req.params.name
        res.send(name)
    } catch (error) {
        res.send('Error')
    }
})
app.get('/hello', (req,res)=> {
    res.send('hello')
})
app.get
app.listen(3000, ()=> {
    console.log('3000 port started')
})