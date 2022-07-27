// code your solution here

// Use find to isolate specific result
function superbowlWin(record) {
  // for of?//
  //   for (let game of record) {
  //     if (game.result === "W") {
  //       // no result in array
  //       // individual objects have result
  //       return game.year;
  //       // returns years when broncos won
  //     }
  //   }
  const game = record.find((g) => {
    return g.result == "W";
    // need second return to tell find the results of each conditional (game)
  });

  if (game) {
    return game.year;
  }
  // if GAME is truthy, return year of game

  // returns undefined by default if never hits return value
}

const arr = [0, 1, 2, 3];

function find(arr, fn) {
  for (const e of arr) {
    if (fn(e)) {
      return e;
    }
  }
}
// find returns one result rather than array of results

find(record, (g) => g.result == "W");
find(record, (g) => g.result == "L");
