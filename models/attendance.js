'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    Id:  {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Member_ID: { 
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Members', 
        key:   "Member_ID"
      }
    },
    IsPresent: DataTypes.BOOLEAN,
    Day: DataTypes.INTEGER,
    Month: DataTypes.STRING,
    Year: DataTypes.INTEGER
  }, {});
  Attendance.associate = function(models) {
    // associations can be defined here
    Attendance.belongsTo(models.Members, {foreignKey: 'Member_ID'});
  };
  return Attendance;
};