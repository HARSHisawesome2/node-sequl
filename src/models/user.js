const getUserModel = (sequelize, { DataTypes }) => {
  const User = sequelize.define('user', {
    userid: {
       type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true 
    },
     username: {
             type: DataTypes.STRING,
             allowNull: false,
           },
    email: {
             type: DataTypes.STRING,
             allowNull: false,
             isEmail: true,
            unique : true,
           },
     password: {
             type: DataTypes.TEXT,
             min : 12 ,
             allowNull: false,
           }, 
   
    
    
    
  });

  User.associate = (models) => {
    User.hasOne(models.Token, { onDelete: 'CASCADE' });
  };

 

   

   

  return User;
};

export default getUserModel;
