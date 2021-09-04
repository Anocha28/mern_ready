const mongoose = require('mongoose')

const pageSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

const Page = mongoose.model('Page', pageSchema)

module.exports = Page