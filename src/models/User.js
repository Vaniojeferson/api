const { Model, DataTypes } = require('sequelize');


class User extends Model {
    static init(sequelize){
        super.init({
            descrição:DataTypes.STRING,
            código: DataTypes.STRING,
            valor: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'listas778'
        })

    }

    /*static associate(models) {
        this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses'});
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    }*/
}

module.exports = User;