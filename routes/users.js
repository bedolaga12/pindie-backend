const usersRouter = require('express').Router();

const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted} = require('../controllers/users');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, hashPassword, } = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.post(
    '/users', createUser, sendUserCreated, hashPassword);
usersRouter.put(
    '/users/:id',
     updateUser, 
     sendUserUpdated);

     usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;