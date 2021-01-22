const mongoose = require("mongoose");

const contatosSchema = new mongoose.Schema({
   name: { type : String },
   lastName: { type : String },
   phone: { type : String },
   email: { type : String },
   address: { type : String }
}, {
    version: false
});

const contatos = new mongoose.model("contatos", contatosSchema);

module.exports = contatos;