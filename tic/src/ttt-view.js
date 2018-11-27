class View {
  constructor(game, $el) {
    this.game = game; 
    this.$el = $el; 
    
    this.setupBoard();
    this.bindEvents();
    this.makemove();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    
  }
}

module.exports = View;
