const Users = require("./models")

function readOne(req,res)
{
    Users.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(ers));
}
function deleteOne(req,res)
{
    Users.findByIdAndRemove(req.params.id)
    .then(data=>req.json(data))
    .catch(errs=>res.json(errs))
    console.log("I'm here!")
}

function updateOne(req,res)
{
    Users.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
    .then(data=>req.json(data))
    .catch(errs=>res.json(errs))
}
function createOne(req,res)
{
    Users.create(req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}
module.exports = {
    readOne: readOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    createOne: createOne,
    
};