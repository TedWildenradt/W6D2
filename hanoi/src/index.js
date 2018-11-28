const View = require('./toh-view.js');
const Game = require('./game.js');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});