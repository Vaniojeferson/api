var base = 'produtos'


module.exports = {
    
    dialect:'postgres',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: base,
    define: {
        timestamps: true,
        underscored: true,
    }
}