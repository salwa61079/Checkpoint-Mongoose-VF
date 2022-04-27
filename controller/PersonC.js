const Person = require("../models/Person");


// task: Create and Save a Record of a Model:
exports.createAndSavePerson =(req,res) => {
    let person = new Person({
    name: "salma",
    dateOfBirth: 20/02/1999,
    age:23,
    email: "salma2@gmail.com",
    address: "address 3",
    favoriteFoods:["lasagne"]
});

person.save((err, data) => {
    if (err) {res.status(500).send(err)}
    else {res.status(200).send({ message: "person added successfully", data })}
       
  });
}

//task: Create Many Records with model.create()
var arrayOfPeople = [
    { name: "jinen",dateOfBirth:"03/03/1960", age: 62,email:"jinen@gmail.fr", favoriteFoods: ["potato"] },
    { name: "sara", age: 46,email:"sara@gmail.com", favoriteFoods: ["roast chicken","chocolate"] },
    { name: "fares", age: 22,email:"fares@gmail.com",address:"address2", favoriteFoods: ["cocacolat"] },
  ];
    exports.createManyPeople = (arrayOfPeople, res) => {
         Person.create(arrayOfPeople, (err, createdpeople) => {
        if(err){res.status(500).send(err)}
        else {res.status(200).send({ message: "people added successfully", createdpeople })}
    });   
    
  };

  //task: Use model.find() to Search Your Database
  
  exports.findPeopleByName = (req, res) => {
    Person.find({ name: req.params.Name }, (err, personFound) => {
        if(err){res.status(500).send(err)}
        else {res.status(200).send({ message: "person found", personFound })}
    });
  };

  //task: Use model.findOne() to Return a Single Matching Document from Your Database
  exports.findOneByFood = (req, res) => {
    Person.findOne({ favoriteFoods: req.params.food }, (err, data) => {
        if(err){res.status(500).send(err)}
        else {res.status(200).send({ message: "person found", data })}
    });
  };

  //task: Use model.findById() to Search Your Database By _id
  exports.findPersonById = (req, res) => {
    Person.findById(req.params.id, (err, data) =>{
      if(err){res.status(500).send(err)}
        else {res.status(200).send({ message: "person found", data })}
    });
  };

//task: Perform Classic Updates by Running Find, Edit, then Save
  exports.findEditThenSave = (req, res) => {
    const foodToAdd = "hamburger";
    Person.findById(req.params.id, (err, data) => {
      if (err) return console.log(err);
      data.favoriteFoods.push(foodToAdd);
      data.save((err, dataNext) =>
        {if(err){res.status(500).send(err)}
        else {res.status(200).send({ message: "person edited", dataNext })}}
      );
    });
  };

//task: Perform New Updates on a Document Using model.findOneAndUpdate()
 exports.findAndUpdate = (req, res) => {
    const ageToSet = 20;
  
    Person.findOneAndUpdate(
      { name: req.params.Name },
      { $set: { age: ageToSet } },
      { new: true },
      (err, data) => (err ? res.status(500).send(err) :
      res.status(200).send({ message: "person edited", data }))
    );
  };

  //task: Delete One Document Using model.findByIdAndRemove
  exports.removeById = (req, res) => {
    Person.findByIdAndRemove(req.params.id, (err, data) =>
      err ?  res.status(500).send(err) :
      res.status(200).send({ message: "person removed", data })
    );
  };

  //task: MongoDB and Mongoose - Delete Many Documents with model.remove()
  exports.removeManyPeople = (req,res) => {
    const nameToRemove = "salma";
    Person.remove({ name: nameToRemove }, (err, data) =>
      err ?  res.status(500).send(err) :
      res.status(200).send({ message: "person removed", data })
    );
  };

  //task: Chain Search Query Helpers to Narrow Search Results
  exports.queryChain = (req,res) => {
    const foodToSearch = "pasta";
    Person.find({ favoriteFoods: foodToSearch })
      .sort({ name: 1 })
      .limit(2)
      .select({ age: 0 })
      .exec((err, dataNext) =>
        err
          ? res.status(500).send(err)
          : res.status(200).send({ message: "person removed", dataNext })
      );
  };

