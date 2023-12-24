//Sequelize is an Object-Relational Mapping (ORM) library for Node.js,
// which provides an easy way to interact with relational databases.
import { Sequelize } from "sequelize";
import db from '../config/Database';

//DataTypes është një objekt që përmban tipet e të dhënave të ndryshme
// që mund të përdoren kur krijohen modelet (tabela) në Sequelize.
const { DataTypes } = Sequelize;
              //emri i tables - users
const User = db.define('users', {
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
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
                }
            },

    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

export default User;