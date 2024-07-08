const mongoose = require ('mongoose');

const dreamSchema = new mongoose.Schema({
    dream: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Dream', dreamSchema);