const db = require("../models");
const AnimalLifeSpan = db.AnimalLifeSpan;

// create new animal data
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

  // Create an animal
  const animal = new AnimalLifeSpan({
    name: req.body.name,
    lifespan: req.body.lifespan,
    imagePath: req.body.imagePath
  });

  // Save animal in the database
  animal
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Animal Data."
      });
    });
};

// read all animal data
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    AnimalLifeSpan.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving animals."
        });
      });
};

// read single animal data by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    AnimalLifeSpan.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No Animal found with ID: " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Animal with ID: " + id });
      });
};

// update animal data by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    AnimalLifeSpan.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `Cannot update Animal with ID: ${id}.`
        });
        } else res.send({ message: "Animal was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Animal with ID: " + id
        });
    });
};

// delete animal data by id
exports.delete = (req, res) => {
    const id = req.params.id;

    AnimalLifeSpan.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Animal with ID: ${id}.`
          });
        } else {
          res.send({
            message: "Animal was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Animal with ID:" + id
        });
    });
};

// delete all animal data
exports.deleteAll = (req, res) => {
    AnimalLifeSpan.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Animals were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all animals."
      });
    });
};
