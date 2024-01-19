const Users = require('./../model/model')

const getAllData = async (req, res) => {
    let allData = await Users.find({})
    res.send(allData)
}

const delData = async (req, res) => {
    let id = req.params.id
    let allData = await Users.findByIdAndDelete({ _id: id })
    res.send(allData)
}

const postData = async (req, res) => {
    let newP = new Users(req.body)
    newP.save()
    res.send(newP)
}

module.exports = { getAllData, delData,postData }