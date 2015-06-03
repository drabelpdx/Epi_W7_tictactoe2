function Player(mark) {
  this.mark = mark;
  this.playedSquare = [];
}


function Space(coordinate) {
  this.coordinate = coordinate;
  this.markedby = "";
}


Space.prototype.markBy = function(player) {
  this.markedby = player;
  player.playedSquare.push(this.coordinate);
}


$(document).ready(function(){
  $(".space").click(function(event){
    event.preventDefault();
    //$("table").find("td").
    alert($(this).attr("id") );

  });


});
