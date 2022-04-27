const express = require("express");
const router = express.Router();
const {
    createAndSavePerson,
    createManyPeople,
    findPeopleByName,
    findOneByFood,
    findPersonById,
    findEditThenSave,
    findAndUpdate,
    removeById,
    removeManyPeople,
    queryChain,
} = require("../controller/PersonC");

router.post("/add", createAndSavePerson);
router.post("/addMany", createManyPeople);

 router.get("/personByName/:Name", findPeopleByName);
 router.get("/personByFood/:food", findOneByFood);
 router.get("/onePersonById/:id", findPersonById);
 router.put("/EditAndSave/:id", findEditThenSave);
 router.put("/findAndUpdate/:Name", findAndUpdate);
 router.delete("/removeById/:id", removeById);
 router.delete("/removeManyPeople", removeManyPeople);
 router.delete("/queryChain", queryChain);
module.exports = router;