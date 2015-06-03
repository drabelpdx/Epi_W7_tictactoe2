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
  var player1 = {};
  var player2 = {};
  var turn = 1;
  $(".start-game").click(function(event){
    var player1 = new Player("x");
    var player2 = new Player("y");
  console.log(player1);
  console.log(player2);
});

  $(".space").click(function(event){
    event.preventDefault();
    turn += 1;

    var newSpace = new Space($(this).attr("id"));
    console.log(newSpace);

    if(turn % 2 === 0) {
      $(this).html("<span class='inner'>x</span>");
      newSpace.markedby = "x";
      console.log(newSpace.markedby);
    }
    else {
      $(this).html("<span class='inner'>o</span>");
      newSpace.markedby = "o";
      console.log(newSpace.markedby);
    }
  });


});
