function Player(mark) {
  this.mark = mark;
  this.playedSquares = [];
}

Player.prototype.wipe = function(){
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
  var play1win = false;
  var play2win = false;
  var player1score = 0, player2score = 0;
  var winCombos = [['1','2','3'], ['4','5','6'], ['7','8','9'], ['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','5','9'], ['3','5','7']];

  $(".start-game").click(function(event){
     player1 = new Player("x");
     player2 = new Player("o");
     var turn = 1;
     $(".scores").html("Player 1 Score: " + player1score + "<br>" +
        "Player 2 Score: " + player2score);

    $(".space").click(function(e){
      e.preventDefault();
      var newSpace = new Space($(this).attr("id"));

      if(turn % 2 !== 0) {


        $(this).html("<span class='inner'>X</span>");
        $(this).off('click');

        newSpace.markedby = "x";
        newSpace.markBy(player1);

        function containsAll(a, b){
          for(var i = 0; i < a.length; i++){
             if($.inArray(a[i], b) == -1) {
               return false;
              }
            }
            play1win = true;
            return true;
        }

        for(var j = 0; j < winCombos.length; j++) {
          console.log(containsAll(winCombos[j],player1.playedSquares));
            if(containsAll(winCombos[j],player1.playedSquares)) {
              $(".messages").text("Player 1 wins!!").show();

              player1score++;
              $('.space').off('click');
            }
        }
      } else {
        $(this).html("<span class='inner'>O</span>");
        $(this).off('click');

        newSpace.markedby = "o";
        newSpace.markBy(player2);
        function containsAll(a, b){
          for(var i = 0 ; i < a.length; i++){
             if($.inArray(a[i], b) == -1) {
               return false;
             }
          }
             play2win = true;
             return true;
          }
          for(var j = 0; j < winCombos.length; j++) {
              console.log(containsAll(winCombos[j],player1.playedSquares));
              if(containsAll(winCombos[j],player2.playedSquares)) {
                $(".messages").text("Player 2 wins!!").show();
                player2score++;
                $('.space').off('click');
              }
          }
      }

      if (play1win === false && play2win === false && turn === 9) {
        $(".messages").text("It's a tie!!").show();
      }

      turn += 1;

      $(".end-game").click(function(e){
        e.preventDefault();
        $("#board td").children().remove("span");
        $(".messages").hide();

        player1.wipe();
        player2.wipe();

      });
    });
  });
});
