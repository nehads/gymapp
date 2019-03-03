'use strict';
module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    Member_ID: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    Admin_ID: DataTypes.UUID,
    Member_Name: DataTypes.STRING,
    Contact_No: DataTypes.STRING,
    Address: DataTypes.STRING,
    Emergency_No: DataTypes.STRING,
    Registration_Date: DataTypes.DATE,
    Service: DataTypes.STRING,
    Service_Charges: DataTypes.INTEGER,
    Status: DataTypes.STRING,
  //  Fee_Status: DataTypes.STRING,
    IsDeleted: DataTypes.BOOLEAN
  }, {});
  Members.associate = function(models) {
    // associations can be defined here
    Members.belongsTo(models.Admins, {as:'Members', foreignKey: 'Admin_ID', targetKey: 'Admin_ID'});
    Members.hasMany(models.Membership,{as:'Membership',foreignKey: 'Member_ID', sourceKey: 'Member_ID'});
  };
  return Members;
};