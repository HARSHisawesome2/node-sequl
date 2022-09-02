import Sequelize from 'sequelize';

import getUserModel from './user';
import getTokenModel from './token';

var DATABASE = 'test'
var DATABASE_USER = 'postgres'
var DATABASE_PASSWORD= 'admin'


const sequelize = new Sequelize(
 DATABASE,
 DATABASE_USER,
 DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  User: getUserModel(sequelize, Sequelize),
  Token: getTokenModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
