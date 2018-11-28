
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
  
  
}






module.exports = View;
