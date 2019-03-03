'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admins = sequelize.define('Admins', {
    Admin_ID: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    User_Name: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  Admins.associate = function(models) {
    // associations can be defined here
    Admins.hasMany(models.Members,{as:'Members',foreignKey: 'Admin_ID', sourceKey: 'Admin_ID'});
  }; 
  return Admins;
};