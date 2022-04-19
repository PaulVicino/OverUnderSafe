module.exports = mongoose => {
    const AnimalLifeSpan = mongoose.model(
      "animallifespans",
      mongoose.Schema(
        {
          name: String,
          lifespan: Number,
          imagePath: String
        },
      )
    );
    return AnimalLifeSpan;
};
