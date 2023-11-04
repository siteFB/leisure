function isValid(button) {
  return button.innerHTML.length == 0;
}

function setSymbol(btn, symbol) {
  btn.innerHTML = symbol;
}

function findTheWinner(pawns, players, turnPlay) {
  if (
    pawns[0].innerHTML == players[turnPlay] &&
    pawns[1].innerHTML == players[turnPlay] &&
    pawns[2].innerHTML == players[turnPlay]
  ) {
    pawns[0].style.backgroundColor = "#9ACD32";
    pawns[1].style.backgroundColor = "#9ACD32";
    pawns[2].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[3].innerHTML == players[turnPlay] &&
    pawns[4].innerHTML == players[turnPlay] &&
    pawns[5].innerHTML == players[turnPlay]
  ) {
    pawns[3].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[5].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[6].innerHTML == players[turnPlay] &&
    pawns[7].innerHTML == players[turnPlay] &&
    pawns[8].innerHTML == players[turnPlay]
  ) {
    pawns[6].style.backgroundColor = "#9ACD32";
    pawns[7].style.backgroundColor = "#9ACD32";
    pawns[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[0].innerHTML == players[turnPlay] &&
    pawns[3].innerHTML == players[turnPlay] &&
    pawns[6].innerHTML == players[turnPlay]
  ) {
    pawns[0].style.backgroundColor = "#9ACD32";
    pawns[3].style.backgroundColor = "#9ACD32";
    pawns[6].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[1].innerHTML == players[turnPlay] &&
    pawns[4].innerHTML == players[turnPlay] &&
    pawns[7].innerHTML == players[turnPlay]
  ) {
    pawns[1].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[7].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[2].innerHTML == players[turnPlay] &&
    pawns[5].innerHTML == players[turnPlay] &&
    pawns[8].innerHTML == players[turnPlay]
  ) {
    pawns[2].style.backgroundColor = "#9ACD32";
    pawns[5].style.backgroundColor = "#9ACD32";
    pawns[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[0].innerHTML == players[turnPlay] &&
    pawns[4].innerHTML == players[turnPlay] &&
    pawns[8].innerHTML == players[turnPlay]
  ) {
    pawns[0].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[2].innerHTML == players[turnPlay] &&
    pawns[4].innerHTML == players[turnPlay] &&
    pawns[6].innerHTML == players[turnPlay]
  ) {
    pawns[2].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[6].style.backgroundColor = "#9ACD32";
    return true;
  }
}

function matchNull(pawns) {
  for (var i = 0, len = pawns.length; i < len; i++) {
    if (pawns[i].innerHTML.length == 0) return false;
  }

  return true;
}

var Show = function (element) {
  var seeShow = element;

  function setText(message) {
    seeShow.innerHTML = message;
  }

  return { sendMessage: setText };
};

function main() {
  var pawns = document.querySelectorAll("#game button");
  var players = ["X", "O"];
  var turnPlay = 0;
  var finishedGame = false;
  var show = new Show(document.querySelector("#statusGame"));
  show.sendMessage(
    "The game begins ! <br /> Player " +
      players[turnPlay] +
      " It's your turn ! "
  );
  for (var i = 0, len = pawns.length; i < len; i++) {
    pawns[i].addEventListener("click", function () {
      if (finishedGame) return;

      if (!isValid(this)) {
        show.sendMessage(
          " Occupied square ! <br /> Player " +
            players[turnPlay] +
            " It's your turn again ! "
        );
      } else {
        setSymbol(this, players[turnPlay]);
        finishedGame = findTheWinner(pawns, players, turnPlay);

        if (finishedGame) {
          show.sendMessage(
            " Player " +
              players[turnPlay] +
              ' won ! <br /> <a href="ttt.html"> Replay </a>'
          );
          return;
        }

        if (matchNull(pawns)) {
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
