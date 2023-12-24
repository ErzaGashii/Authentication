//Sequelize is an Object-Relational Mapping (ORM) library for Node.js,
// which provides an easy way to interact with relational databases.
import { Sequelize } from "sequelize";
import db from '../config/Database';
import User from "./UserModel";

//DataTypes është një objekt që përmban tipet e të dhënave të ndryshme
// që mund të përdoren kur krijohen modelet (tabela) në Sequelize.
const { DataTypes } = Sequelize;
              //emri i tables - product
const Products = db.define('product', {
    uuid:{
       type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }, 

    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }
            },

    price: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});
//Ketu ka nje foregin key
//Eshte nje lidhshmeri nje me shume - ku nje user mund te shtoje shume produkte
User.hasMany(Products)
Products.belongsTo(User, {foreignKey:"userId"});

export default Products;