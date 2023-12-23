import { Sequelize } from "sequelize";

//name of Database, user, password
const db = new Sequelize ('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;