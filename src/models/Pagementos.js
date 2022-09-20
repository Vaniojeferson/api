const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            idprodutos:DataTypes.STRING,
            valortotal: DataTypes.STRING,
            valorcomdesconto: DataTypes.STRING,
            valordodesconto: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'valores_recebidos'
        })

    }

    /*static associate(models) {
        this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses'});
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    }*/

    
}

module.exports = User;