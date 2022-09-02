const getTokenModel = (sequelize, { DataTypes }) => {
  const Message = sequelize.define('message', {
    userid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        references: {
            model: 'User',
            key: 'userid',
          },
    },
     token: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    
    
    
  });

  Message.associate = (models) => {
    Message.belongsTo(models.User);
  };

  return Message;
};

export default getMessageModel;
