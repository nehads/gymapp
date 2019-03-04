'use strict';
module.exports = (sequelize, DataTypes) => {
  const Membership = sequelize.define('Membership', {
    Membership_ID: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    Member_ID: { 
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Members',
        key:   "Member_ID"
      }
    },
    Month: DataTypes.STRING,
    Year: DataTypes.INTEGER,
    Fee_Status: DataTypes.STRING,
    Amount: DataTypes.INTEGER
  }, {});
  Membership.associate = function(models) {
    // associations can be defined here
    Membership.belongsTo(models.Members, {as:'Membership', foreignKey: 'Member_ID', targetKey: 'Member_ID'});

  };
  return Membership;
};