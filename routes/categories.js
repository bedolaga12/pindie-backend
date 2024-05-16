const categoriesRouter = require('express').Router();

const {sendAllCategories, sendCategoryCreated, sendCategoryById} = require('../controllers/categories');
const {findAllCategories, createCategory, findCategoryById} = require('../middlewares/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findAllCategories, sendCategoryById);
categoriesRouter.post('/categories', findAllCategories, sendAllCategories);

module.exports = categoriesRouter;