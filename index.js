const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()
const {PORT} = process.env




// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// tes backend
app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Backend is running well'
    })
})

// Routers
const router = require('./routes/product.js')
app.use('/api/products', router)

// Handle route not found
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'Page not found'
    })
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))