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

const crudOperation = async (req, res) => {
  //   let data = await Users.create({
  //     name: "Demo6",
  //     email: "demo6@gmail.com",
  //     gender: "male",
  //   });

  //   let data = await Users.update(
  //     { name: "final", email: "final@gmail.com" },
  //     {
  //       where: {
  //         id: 2,
  //       },
  //     }
  //   );

  //   let data = await Users.destroy({
  //     where: {
  //       id: 3,
  //     },
  //   });

  //   let data = await Users.destroy({
  //     truncate: true,
  //   });

  //   let data = await Users.bulkCreate([
  //     { name: "Demo1", email: "demo1@gmail.com", gender: "female" },
  //     { name: "Demo2", email: "demo2@gmail.com", gender: "female" },
  //     { name: "Demo3", email: "demo3@gmail.com", gender: "female" },
  //     { name: "Demo4", email: "demo4@gmail.com", gender: "female" },
  //     { name: "Demo5", email: "demo5@gmail.com", gender: "female" },
  //   ]);

  //   let data = await Users.findAll({});

  //   let data = await Users.findOne({
  //     where: {
  //       id: 2,
  //     },
  //   });

  console.log(data.dataValues);

  let response = {
    data: data,
  };

  res.status(200).json(response);
};

const queryData = async (req, res) => {
  //   let data = await Users.create(
  //     {
  //       name: "user1",
  //       email: "user1@gmail.com",
  //       gender: "male",
  //     },
  //     {
  //       fields: ["email", "gender"],
  //     }
  //   );

  //   let data = await Users.findOne({});

  //   let data = await Users.findAll({});

  //   let data = await Users.findAll({
  //     attributes: ["name", "email"],
  //   });

  //   let data = await Users.findAll({
  //     attributes: ["name", ["email", "Email Address"]],
  //   });

  //   let data = await Users.findAll({
  //     attributes: ["name", ["email", "Email Address"], "gender"],
  //   });

  //   let data = await Users.findAll({
  //     attributes: [
  //       [db.Sequelize.fn("Count", db.Sequelize.col("email")), "Email Count"],
  //     ],
  //   });

  //   let data = await Users.findAll({
  //     attributes: [
  //       "name",
  //       "email",
  //       "gender",
  //       [
  //         db.Sequelize.fn(
  //           "CONCAT",
  //           db.Sequelize.col("email"),
  //           " (For contact purpose)"
  //         ),
  //         "Email Address",
  //       ],
  //     ],
  //   });

  //   let data = await Users.findAll({
  //     attributes: {
  //       exclude: ["created_at", "updated_at"],
  //     },
  //   });

  //   let data = await Users.findAll({
  //     attributes: {
  //       exclude: ["created_at", "updated_at"],
  //       include: [
  //         [
  //           db.Sequelize.fn(
  //             "CONCAT",
  //             db.Sequelize.col("name"),
  //             " (Our valued customer)"
  //           ),
  //           "Full Name (Tag)",
  //         ],
  //       ],
  //     },
  //   });

  //   let data = await Users.findAll({
  //     where: {
  //       id: 1,
  //     },
  //   });

  //   let data = await Users.findAll({
  //     where: {
  //       id: {
  //         [db.Op.eq]: 2,
  //       },
  //       email: {
  //         // [db.Op.eq]: "demo2@gmail.com",
  //         [db.Op.like]: "%@gmail.com%",
  //       },
  //     },
  //   });

  //   let data = await Users.findAll({
  //     where: {
  //       id: {
  //         [db.Op.gt]: 2,
  //       },
  //       email: {
  //         // [db.Op.eq]: "demo2@gmail.com",
  //         [db.Op.like]: "%@gmail.com%",
  //       },
  //     },
  //     order: [
  //       ["name", "DESC"],
  //       //   ["email", "ASC"],
  //     ],
  //     // group: ["name", "email"],
  //     limit: 4,
  //     offset: 1,
  //   });

  let data = await Users.count({});

  console.log(data.dataValues);

  let response = {
    data: data,
  };

  res.status(200).json(response);
};

module.exports = {
  addUser,
  crudOperation,
  queryData,
};
