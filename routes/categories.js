const categoriesRouter = require('express').Router();

const {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated} = require('../controllers/categories');
const {findAllCategories, createCategory, findCategoryById, updateCategory,} = require('../middlewares/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findAllCategories, sendCategoryById);
categoriesRouter.post('/categories', findAllCategories, sendAllCategories);
categoriesRouter.put(
    "/categories/:id",
    updateCategory, 
    sendCategoryUpdated 
  ); 

module.exports = categoriesRouter;