const gamesRouter = require('express').Router();

const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const {findAllGames, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, createGame, findGameById, updateGame, deleteGame, checkIsGameExists} = require('../middlewares/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);
  
  gamesRouter.delete(
    "/games/:id", 
    deleteGame,
    sendGameDeleted 
  ); 
module.exports = gamesRouter;