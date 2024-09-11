let db = require('../models')
let User = db.user

let addUser = async (req,res) => {
    // const jane = User.build({ firstName: "Jane", lastName: "Bhaiya"});
    // await jane.save();
    // res.status(200).json(jane.toJSON());

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

    
    const jane = await User.create({ firstName: "Johny", lastName: "Bhaiya" });
    jane.update({ firstName: "John", lastName: "Doe" });
    await jane.save();
    await jane.reload();
    res.status(200).json(jane.toJSON());
}

module.exports = {
    addUser
}