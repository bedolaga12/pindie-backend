const categoriesRouter = require('express').Router();

const {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const {findAllCategories, checkIsCategoryExists, createCategory, findCategoryById, updateCategory, deleteCategory,} = require('../middlewares/categories');

categoriesRouter.get('/categories',  findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findCategoryById, findAllCategories, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  createCategory,
  sendCategoryCreated
); 

categoriesRouter.put(
    "/categories/:id",
    updateCategory, 
    sendCategoryUpdated 
  ); 
  categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;