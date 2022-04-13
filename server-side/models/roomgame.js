'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roomgame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roomgame.init({
    roomname: DataTypes.STRING,
    player1: DataTypes.STRING,
    player2: DataTypes.STRING,
    choice1: DataTypes.ARRAY(DataTypes.STRING),
    choice2: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Roomgame',
    tableName: 'roomgames',
  });
  return Roomgame;
};