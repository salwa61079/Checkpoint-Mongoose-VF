const mongoose = require('mongoose')

const { Schema, model } = mongoose;

//task: Create a person with this prototype:
const personSchema = new Schema({
    name: { type: String },
    dateOfBirth: { type: Date, default: Date.now },
    age: { type: Number},
    email: { type: String},
    address: { type: String },
    favoriteFoods:{type: [String]}   
});

module.exports = Person = mongoose.model('Person', personSchema)
