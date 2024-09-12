const db = require("../models");

const Users = db.users;

const addUser = async (req, res) => {
  //   let data = await Users.build({ name: "Test", email: "test2@gmail.com" });
  //   await data.save();

  let data = await Users.create({ name: "Demo4", email: "demo4@gmail.com" });

  data.name = "dummy";

  //   data.save();

  //   data.destroy();

  data.reload();

  console.log(data.dataValues);

  let response = {
    data: "Okay",
  };

  res.status(200).json(response);
};

module.exports = {
  addUser,
};
