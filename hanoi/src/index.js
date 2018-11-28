const View = require('./toh-view.js');
const Game = require('./game.js');

$( () => {
  const $rootEl = $('.toh');
  const game = new Game();
  new View(game, $rootEl);
});