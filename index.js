const express = require('express')

const app = express()

require('dotenv').config()

app.use(express.json())

const connectDB = require('./connectMongo')

connectDB()

const BookModel = require('./models/book.model')

app.get('/api/v1/books', async (req, res) => {
    res.status(200).json({message: 'books'})
})

app.get('/api/v1/books/:id', async (req, res) => {
    res.status(200).json({message: 'books Id'})
})

app.get('/', async (req, res) => {
    res.status(200).json({message: 'Home'})
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})