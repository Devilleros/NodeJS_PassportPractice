const mongoose = require("mongoose");
const { mongodb } = require("./keys");

// Se puede agregar useNewUrlParser: true en el objeto dentro de los parametors de la funcion
mongoose.connect(mongodb.URI, {})
    .then(db => console.log("Database is connected"))
    .catch(err => console.error(err));