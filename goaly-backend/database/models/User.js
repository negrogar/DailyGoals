module.exports = (sequelize,dataTypes)=>{
    let alias = "Users";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        goal_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        
        //Asosiacion 1:M
        User.hasMany(models.Goals, {  //Pelicula es el alias
            as: "goals",  //Asociacion entre peliculas y genero
            foreignKey: "user_id"
        })

    }

    return User;
}