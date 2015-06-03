function Player(mark) {
  this.mark = mark;
  this.playedSquares = [];
}


function Space(coordinate) {
  this.coordinate = coordinate;
  this.markedby = "";
}



Space.prototype.markBy = function(player) {
  this.markedby = player;
  player.playedSquares.push(this.coordinate);
}


$(document).ready(function(){
  var player1;
  var player2;
  var turn = 1;
  var winCombos = [['1','2','3'], ['4','5','6'], ['7','8','9'], ['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','5','9'], ['3','5','7']];
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

          function containsAll(a, b){
            var winCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];

            for(var i = 0 , len = a.length; i < len; i++){
               if($.inArray(a[i], b) == -1) return false;
            }
               return true;
            }
            for(var j = 0; j < winCombos.length; j++) {
                console.log(containsAll(winCombos[j],player1.playedSquares));
                if(containsAll(winCombos[j],player1.playedSquares)) {
                  alert("player 1 wins");
                }
            }
          }




    else {
      $(this).html("<span class='inner'>o</span>");
      newSpace.markedby = "o";
      newSpace.markBy(player2);
      function containsAll(a, b){
        var winCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];

        for(var i = 0 , len = a.length; i < len; i++){
           if($.inArray(a[i], b) == -1) return false;
        }
           return true;
        }
        for(var j = 0; j < winCombos.length; j++) {
            console.log(containsAll(winCombos[j],player1.playedSquares));
            if(containsAll(winCombos[j],player2.playedSquares)) {
              alert("player 2 wins");
            }
        }

    }


  });


});
