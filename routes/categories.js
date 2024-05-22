const categoriesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");

const {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const {findAllCategories, checkIsCategoryExists, createCategory, findCategoryById, updateCategory, deleteCategory,} = require('../middlewares/categories');

categoriesRouter.get('/categories',  findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findCategoryById, findAllCategories, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkAuth,
  createCategory,
  sendCategoryCreated
); 

categoriesRouter.put(
    "/categories/:id",
    checkAuth,
    updateCategory, 
    sendCategoryUpdated 
  ); 
  categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;