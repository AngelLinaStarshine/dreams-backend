const DreamModel = require('./DreamModel');

//GET

module.exports.getDream = async (req, res) => {
    const myDream = await DreamModel.find();
    res.send(myDream)
}

//POST

module.exports.saveDreams = async (req, res) => {
    const { dream } = req.body;
    DreamModel.create({ dream })
    .then((data) => {console.log('Dream was added')
        res.send(data)
    })
}

//DELETE 

module.exports.deleteDream = async (req, res) => {
    const{ _id } = req.body
    DreamModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a dream'))

}


//EDIT

module.exports.editDream = async (req, res) => {
    const {_id, dream } = req.body;
    DreamModel.findByIdAndUpdate(_id, { dream })
    .then(() => res.send('Edited a dream'))
}