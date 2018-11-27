class View {
  constructor(game, $el) {
    this.game = game; 
    this.$el = $el; 
    
    this.setupBoard();
    this.bindEvents();
    this.makemove();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event =>{
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    let playersMark = this.game.currentPlayer;
    // debugger
    $square.addClass('selected');
    $square.html(playersMark);
    // this.game.board.placeMark($square.pos, game.currentPlayer.mark);
    const pos = $square.data('pos');
    // $("li").on("click", function() {
    // 
    // });
    // this.game.swapTurn();
    this.game.playMove(pos);
    if (this.game.isOver()) {
      let $body = $('body');
      $body.append('<h1>Game Over</h1>');
    }
    
    
  }

  setupBoard() {
    const $ul = $("<ul>");
    
    for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (var colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.addClass('square');
        $li.data("pos", [rowIdx, colIdx]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
