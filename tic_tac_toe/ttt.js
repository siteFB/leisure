function isValid(button) {
    return button.innerHTML.length == 0;
  }
  
  function setSymbol(btn, symbol) {
    btn.innerHTML = symbol;
  }
  
  function findTheWinner(pawn, players, turnPlay) {
    if (
      pawn[0].innerHTML == players[turnPlay] &&
      pawn[1].innerHTML == players[turnPlay] &&
      pawn[2].innerHTML == players[turnPlay]
    ) {
      pawn[0].style.backgroundColor = "#9ACD32";
      pawn[1].style.backgroundColor = "#9ACD32";
      pawn[2].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pawn[3].innerHTML == players[turnPlay] &&
      pawn[4].innerHTML == players[turnPlay] &&
      pawn[5].innerHTML == players[turnPlay]
    ) {
      pawn[3].style.backgroundColor = "#9ACD32";
      pawn[4].style.backgroundColor = "#9ACD32";
      pawn[5].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pawn[6].innerHTML == players[turnPlay] &&
      pawn[7].innerHTML == players[turnPlay] &&
      pawn[8].innerHTML == players[turnPlay]
    ) {
      pawn[6].style.backgroundColor = "#9ACD32";
      pawn[7].style.backgroundColor = "#9ACD32";
      pawn[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pawn[0].innerHTML == players[turnPlay] &&
      pawn[3].innerHTML == players[turnPlay] &&
      pawn[6].innerHTML == players[turnPlay]
    ) {
      pawn[0].style.backgroundColor = "#9ACD32";
      pawn[3].style.backgroundColor = "#9ACD32";
      pawn[6].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pawn[1].innerHTML == players[turnPlay] &&
      pawn[4].innerHTML == players[turnPlay] &&
      pawn[7].innerHTML == players[turnPlay]
    ) {
      pawn[1].style.backgroundColor = "#9ACD32";
      pawn[4].style.backgroundColor = "#9ACD32";
      pawn[7].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pawn[2].innerHTML == players[turnPlay] &&
      pawn[5].innerHTML == players[turnPlay] &&
      pawn[8].innerHTML == players[turnPlay]
    ) {
      pawn[2].style.backgroundColor = "#9ACD32";
      pawn[5].style.backgroundColor = "#9ACD32";
      pawn[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pawn[0].innerHTML == players[turnPlay] &&
      pawn[4].innerHTML == players[turnPlay] &&
      pawn[8].innerHTML == players[turnPlay]
    ) {
      pawn[0].style.backgroundColor = "#9ACD32";
      pawn[4].style.backgroundColor = "#9ACD32";
      pawn[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      pawn[2].innerHTML == players[turnPlay] &&
      pawn[4].innerHTML == players[turnPlay] &&
      pawn[6].innerHTML == players[turnPlay]
    ) {
      pawn[2].style.backgroundColor = "#9ACD32";
      pawn[4].style.backgroundColor = "#9ACD32";
      pawn[6].style.backgroundColor = "#9ACD32";
      return true;
    }
  }
  
  function matchNull(pawn) {
    for (var i = 0, len = pawn.length; i < len; i++) {
      if (pawn[i].innerHTML.length == 0) return false;
    }
  
    return true;
  }
  
  var show = function(element) {
    var seeShow = element;
  
    function setText(message) {
      seeShow.innerHTML = message;
    }
  
    return { sendMessage: setText };
  };
  
  function main() {
    var pawn = document.querySelectorAll("#gameButton");
    var players = ["X", "O"];
    var turnPlay = 0;
    var finishedGame = false;
    var show = new show(document.querySelector("#statusGame"));
    show.sendMessage(
      "The game begins ! <br /> Player " +
        players[turnPlay] +
        " It's your turn ! "
    );
    for (var i = 0, len = pawn.length; i < len; i++) {
      pawn[i].addEventListener("click", function() {
        if (finishedGame) return;
  
        if (!isValid(this)) {
          show.sendMessage(
            " Occupied square ! <br /> Player " +
              players[turnPlay] +
              " It's your turn again ! "
          );
        } else {
          setSymbol(this, players[turnPlay]);
          finishedGame = findTheWinner(pawn, players, turnPlay);
  
          if (finishedGame) {
            show.sendMessage(
              " Player " +
                players[turnPlay] +
                ' wins ! <br /> <a href="ttt.html"> Replay </a>'
            );
            return;
          }
  
          if (matchNull(pawn)) {
            show.sendMessage(
              ' Match Null ! <br/> <a href="ttt.html"> Replay </a>'
            );
            return;
          }
  
          turnPlay++;
          turnPlay = turnPlay % 2;
          show.sendMessage(" Player " + players[turnPlay] + " It's up to you !");
        }
      });
    }
  }
  
  main();
 
  