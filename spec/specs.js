describe('Player', function() {
  it("returns the player's mark", function(){
    var testPlayer = new Player("x");
    expect(testPlayer.mark).to.equal("x");
  });
});

describe('Space', function() {
  it("returns the space's coordinate", function(){
    var testSpace = new Space("2");
    expect(testSpace.coordinate).to.equal("2");
  });

  it("returns the player's mark", function(){
    var testPlayer = new Player("x");
    var testSpace = new Space("3");
    testSpace.markBy(testPlayer)
    expect(testSpace.markedby).to.equal(testPlayer);
  });

  it("returns the spaces coordinate to playedsquare", function() {
    var testPlayer = new Player("x");
    var testSpace = new Space("3");
    testSpace.markBy(testPlayer);
    expect(testPlayer.playedSquares).to.eql(["3"]);
  });
});
