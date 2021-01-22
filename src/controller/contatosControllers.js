const contatos = require("../model/contatosModels");

const getAll = (req, res) => {
    contatos.find(function (err, contatos) {
        if(err){
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send(contatos);
        };
    });
};

const postContatos = (req, res) => {
    let contato = new contatos(req.body);

    contato.save(function(err) {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(201).send({ message: "Contato successfully included!" });
        };
    });
};

const getByName = (req, res) => {
    const name = req.params.name;

    const nameFiltrado = contatos.find((contatos) => contatos.name == name);
    console.log(name);

    res.status(200).send(nameFiltrado);
};

const putContato = (req, res) => {
    const id = req.params.id
    contatos.updateMany({id}, {$set : req.body }, { upsert : true }, function(err) {
        if(err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ message: "Contato updated successfully!" });
        };
    });
};

const deleteContato = (req, res) => {
    const parametros = req.query
    contatos.deleteOne(parametros, function(err) {
        if(err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ message: "Contato successfully removed!" });
        };
    });
};

module.exports = {
    getAll,
    postContatos,
    getByName,
    putContato,
    deleteContato
};