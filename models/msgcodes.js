'use strict';
module.exports = (sequelize, DataTypes) => {
  const MSGCodes = sequelize.define('MSGCodes', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
      type: DataTypes.UUID
    },
    Code: DataTypes.INTEGER,
    Msg: DataTypes.STRING,
    Type: DataTypes.STRING
  }, {});
  MSGCodes.associate = function(models) {
    // associations can be defined here
  };
  return MSGCodes;
};