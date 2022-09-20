var base = 'produtos'

module.exports = {
    dialect:'postgres',
    host: 'https://vaniojeferson.github.io/api/',
    username: 'postgres',
    password: 'admin',
    database: base,
    define: {
        timestamps: true,
        underscored: true,
    }
}