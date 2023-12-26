import { UUIDV1 } from "sequelize";
import Users from "../models/UserModel";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                uuid: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email, password, confPassword, role } = req.body;
        if (password !== confPassword)
            return res.status(400).json({ msg: "Incorrect Password" });
        const hashPassword = await argon2.hash(password);
        try {
            await User.create({
                name: name,
                email: email,
                password: hashPassword,
                role: role,
            });
            res.status(201).json({ msg: "Register" });
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const updateUser = (req, res) => {};

export const deleteUser = (req, res) => {};
