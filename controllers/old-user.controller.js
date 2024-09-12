let db = require('../models')
let User = db.user

let addUser = async (req,res) => {
    const jane = User.build({ firstName: "Jane", lastName: "Bhaiya"});
    await jane.save();
    res.status(200).json(jane.toJSON());

    // const jane = await User.create({ firstName: "Johny", lastName: "Bhaiya" });
    // res.status(200).json(jane.toJSON());

    // const jane = await User.create({ firstName: "Johny", lastName: "Bhaiya" });
    // jane.set({ firstName: "Janardan", lastName: "Bhai" });
    // await jane.save();
    // res.status(200).json(jane.toJSON());

    // const jane = await User.create({ firstName: "Johny", lastName: "Bhaiya" });
    // jane.update({ firstName: "John", lastName: "Doe" });
    // await jane.save();
    // res.status(200).json(jane.toJSON());

    // const jane = await User.create({ firstName: "Johny", lastName: "Bhaiya" });
    // jane.update({ firstName: "John", lastName: "Doe" });
    // await jane.save();
    // await jane.destroy();
    // res.status(200).json(jane.toJSON());

    
    // const jane = await User.create({ firstName: "Johny", lastName: "Bhaiya" });
    // jane.update({ firstName: "John", lastName: "Doe" });
    // await jane.save();
    // await jane.reload();
    // res.status(200).json(jane.toJSON());
}

let getUsers = async (req, res) => {
    const data = await User.findAll({});
    res.status(200).json({ data: data});
}

let getUser = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ data: data});
}

let postUser = async (req, res) => {
    const postData = req.body;

    if(postData.length > 1) {
        var data = await User.bulkCreate(postData);
    } else {
        var data = await User.create(postData);
    }
    
    res.status(200).json({data:data});
}

let deleteUser = async (req, res)=> {
    const data = await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({data:data});
}

let updateUser = async (req, res) => {
    const dataToBeUpdated = req.body;
    const data = await User.update(dataToBeUpdated, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({data:data});
}

const queryUser = async (req, res) => {
    const data = await User.create({
        firstName: 'Bijoy',
        lastName: "Gupta"
    }, {
        fields: ['lastName','firstName']
    });
    console.log('================',data.firstName, data.lastName);
    res.status(200).json({data:data});
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser,
    queryUser
}