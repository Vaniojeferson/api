var base = 'produtos'

module.exports = {
    dialect:'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: base,
    define: {
        timestamps: true,
        underscored: true,
    }
}