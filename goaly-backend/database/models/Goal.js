module.exports = (sequelize,dataTypes)=>{
    let alias = "Goals";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        goal:{
            type: dataTypes.STRING
        },
        date:{
            type: dataTypes.DATE
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        completed:{
            type: dataTypes.INTEGER
        },
        amount:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "goals",
        timestamps: false
    }

    const Goal = sequelize.define(alias, cols, config);

    //Asosiacion
    /*
    Goal.associate = function (models) {

        //Asosiacion 1:M
        Goal.belongsTo(models.Users, {  //Genero es el alias
            as: "users",  //Asociacion entre peliculas y genero
            foreignKey: "goal_id"
        })
    }
    */
    return Goal;
}