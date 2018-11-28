
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
      this.makeMove($tower);
    }));
  }
  
  makeMove($tower) {
    
  }
  
  
  setupBoard() {
    const $ul = $("<ul>");

    for (var towerIdx = 0; towerIdx < 3; towerIdx++) {
      let $li = $("<li>");
      $li.addClass('tower');
      $li.data("pos", towerIdx);
      $ul.append($li);
    }
    
    this.$el.append($ul);
  }
}






module.exports = View;
