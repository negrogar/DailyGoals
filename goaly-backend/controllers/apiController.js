let db = require('../database/models');
let sequelize = db.sequelize;

const apiController = {
    create: function(req,res){
        db.Goals.create({
            goal: req.body.yourGoal,
            user_id:1,
        })
    },
    list: function(req,res){
        db.Goals.findAll()            //Goals es el alias indicado en el modelo. Aca nos vinculamos a la db
        .then(function(goals){
            res.send(goals)
        })
    },
    delete: function(req,res){
        //db.Goals.findByPk()
    },


}

module.exports = apiController