module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING,
        // set(value) {
        //   this.setDataValue("name", value + " Singh");
        // },
        get() {
          return (
            this.getDataValue("name") +
            " is credited person with email:- " +
            this.email
          );
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: "test@gmail.com",
        allowNull: false,
        unique: true,
        // set(value) {
        //   this.setDataValue("email", value + "@gmail.com");
        // },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          // equals: "male",
          // equals: {
          //   args: "male",
          //   msg: `Gender must be 'male'`,
          // },
          // isIn: [["male", "female"]],
          isIn: {
            args: [["male", "female"]],
            msg: `Please select from male/female`,
          },
        },
      },
    },
    {
      //   tableName: "userdata",
      //   timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Users;
};
