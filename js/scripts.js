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
  var player1;
  var player2;
  var turn = 1;

  $(".start-game").click(function(event){
     player1 = new Player("x");
     player2 = new Player("o");
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
      newSpace.markBy(player1);
      //console.log(newSpace.markedby);
      alert(player1.playedSquare);
    }
    else {
      $(this).html("<span class='inner'>o</span>");
      newSpace.markedby = "o";
      newSpace.markBy(player2);
      //console.log(newSpace.markedby);
      alert(player2.playedSquare);
    }


  });


});
