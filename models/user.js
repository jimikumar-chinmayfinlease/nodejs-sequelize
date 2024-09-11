// 1st way to create table
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('./index');
module.exports = (sequelize, DataTypes, Model) => {
class User extends Model {}

User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: 'Bhaiya'
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

}
/*

Executing (default): SELECT 1+1 AS result
Executing (default): DROP TABLE IF EXISTS `Users`;
Executing (default): CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Users`

*/

// 2nd way to create table
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const User = sequelize.define('User', {
//     // Model arrtibutes are defined here
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         defaultValue: 'Bhai'
//     }
// }, {
//     // Other model options go here
//     tableName: 'users',
//     // timestamps: false
//     createdAt: false,
//     updatedAt: 'updatedDataAt',
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// module.exports = User;

/*

On running main file index.js

User.sync({force: true });

Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`

User.sync(); // 1st time

Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'users' AND TABLE_SCHEMA = 'employeedb'
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`

User.sync(); // 2nd time

Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'users' AND TABLE_SCHEMA = 'employeedb'
Executing (default): SHOW INDEX FROM `users`

User.sync({alter: true });

Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'users' AND TABLE_SCHEMA = 'employeedb'
Executing (default): SHOW FULL COLUMNS FROM `users`;
Executing (default): SELECT CONSTRAINT_NAME as constraint_name,CONSTRAINT_NAME as constraintName,CONSTRAINT_SCHEMA as constraintSchema,CONSTRAINT_SCHEMA as constraintCatalog,TABLE_NAME as tableName,TABLE_SCHEMA as tableSchema,TABLE_SCHEMA as tableCatalog,COLUMN_NAME as columnName,REFERENCED_TABLE_SCHEMA as referencedTableSchema,REFERENCED_TABLE_SCHEMA as referencedTableCatalog,REFERENCED_TABLE_NAME as referencedTableName,REFERENCED_COLUMN_NAME as referencedColumnName FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE where TABLE_NAME = 'users' AND CONSTRAINT_NAME!='PRIMARY' AND CONSTRAINT_SCHEMA='employeedb' AND REFERENCED_TABLE_NAME IS NOT NULL;
Executing (default): ALTER TABLE `users` CHANGE `firstName` `firstName` VARCHAR(255) NOT NULL;
Executing (default): ALTER TABLE `users` CHANGE `lastName` `lastName` VARCHAR(255);
Executing (default): ALTER TABLE `users` CHANGE `createdAt` `createdAt` DATETIME NOT NULL;
Executing (default): ALTER TABLE `users` CHANGE `updatedAt` `updatedAt` DATETIME NOT NULL;
Executing (default): SHOW INDEX FROM `users`

User.drop();

Executing (default): SELECT 1+1 AS result
Executing (default): DROP TABLE IF EXISTS `users`;

User.sync({force: true });
timestamps: false

Executing (default): SELECT 1+1 AS result
Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255), PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`

createdAt: false

Executing (default): SELECT 1+1 AS result
Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255), `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`

createdAt: false,
updatedAt: 'updatedDataAt',

Executing (default): SELECT 1+1 AS result
Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255), `updatedDataAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`

defaultValue: 'Bhai'

Executing (default): SELECT 1+1 AS result
Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255) DEFAULT 'Bhai', `updatedDataAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`
*/