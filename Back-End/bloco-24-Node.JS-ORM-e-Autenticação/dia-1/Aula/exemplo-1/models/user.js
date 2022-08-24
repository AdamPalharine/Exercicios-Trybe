'use strict';

// para dar autocomplet
//JSdocs
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataType} DataTypes 
 */

const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    tableName: 'users'
    // para que sempre chame a tabela com o nome minusculo
  })
  return User;
};

module.exports = createUserModel
