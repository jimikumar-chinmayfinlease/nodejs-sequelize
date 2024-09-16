const { Sequelize, DataTypes, Op, QueryTypes } = require("sequelize");

const sequelize = new Sequelize("employeedb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, idle: 10000 },
});

sequelize
  .authenticate()
  .then(() => console.log(`+++++++++++++++ Database Connected.`))
  .catch((error) => console.log(`Error`, error));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;
db.QueryTypes = QueryTypes;

db.sequelize
  .sync({ force: false })
  .then(() => console.log(`+++++++++++++++ Database synced.`))
  .catch((error) => console.log(`----------- Error while syncing database.`));

db.users = require("./user.model")(sequelize, DataTypes);

module.exports = db;
