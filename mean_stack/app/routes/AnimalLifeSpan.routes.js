module.exports = app => {
    const AnimalLifeSpans = require("../controllers/AnimalLifeSpan.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", AnimalLifeSpans.create);
  
    // Retrieve all Tutorials
    router.get("/", AnimalLifeSpans.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", AnimalLifeSpans.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", AnimalLifeSpans.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", AnimalLifeSpans.delete);
  
    // Create a new Tutorial
    router.delete("/", AnimalLifeSpans.deleteAll);
  
    app.use("/api/animallifespans", router);
  };
