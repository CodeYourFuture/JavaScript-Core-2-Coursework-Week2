/*
Create a "Choose Your Own Adventure" game using an object. In these kind of
games, the player is in a room and can move to other rooms to the north, east,
south or west.
To start the game, run this file with Node. Depending on your current directory, run one of:
    node 1-choose-your-own-adventure.js  
    node 3-extra/1-choose-your-own-adventure.js 
To stop the game, press
Ctrl-C.
To run the tests for the game, run this file with npm test
    npm test -- --testPathPattern 11-choose-your-own-adventure.js
It has a currentRoom property to store which room the player is in.
Give your object methods for:
- Starting the game in the correct room when passed a room name parameter
- Moving the player to another room when passed a direction parameter
The functionality for running a game has been provided for you. It first prompts
the player to enter the starting room. Then it will ask players to to type in a
direction (north/east/south/west) that they want to move in.
An object containing one object per room has been provided for you. Take your
time to read it carefully. The rooms look something like this:
+-----------+-----------+
|           |           |
|   Hall    | Classroom |
|           |           |
+-----------------------+
|           |
|  Library  |
|           |
+-----------+
----------------------------------------------------------
Stretch goal: what happens if you try to move in a direction that the current
room doesn't allow? For example if you are in the Classroom and you try to move
east? If there is a bug in your code, try to fix it. 
To enable the tests for the stretch goals, remove the ".skip" on the appropriate tests below.
*/

let game = {
  currentRoom: null,

  start: function (roomName) {
    // This function is called with the name of the room that the player wants
    // to start in.
    // Finish the function so that the currentRoom property is set to the room
    // object for the correct room.
    //
    // Hint: the only valid rooms are "hall", "classroom" and "library".
    const roomChose = roomName.toLowerCase();
    if (roomChose === "hall") {
      this.currentRoom = rooms.hall;
    } else if (roomChose === "classroom") {
      this.currentRoom = rooms.classroom;
    } else if (roomChose === "library") {
      this.currentRoom = rooms.library;
    } else {
      console.log(
        `${roomChose} is not a valid room, please choose hall, classroom, or library`
      );
    }
  },

  move: function (direction) {
    // This function is called with the direction that the player wants to move.
    // Finish the function so that the currentRoom property is updated with new
    // room in the direction that the player wants to move in.
    //
    // Hint: the room objects have north/east/south/west methods which return
    // a new room object that is in the relevant direction.
    const directions = direction.toLowerCase();
    if (this.currentRoom.hall && directions === "north") {
      this.currentroom = rooms.hall.north();
    } else if (this.currentRoom.hall && directions === "east") {
      this.currentRoom = rooms.hall.east();
    } else if (this.currentRoom.hall && directions === "south") {
      this.currentRoom = rooms.hall.south();
    } else if (this.currentRoom.hall && directions === "west") {
      this.currentRoom = rooms.hall.west();
    } else if (this.currentRoom.library && directions === "north") {
      this.currentroom = rooms.library.north();
    } else if (this.currentRoom.library && directions === "east") {
      this.currentRoom = rooms.library.east();
    } else if (this.currentRoom.library && directions === "south") {
      this.currentRoom = rooms.library.south();
    } else if (this.currentRoom.library && directions === "west") {
      this.currentRoom = rooms.library.west();
    } else if (this.currentRoom.classroom && directions === "north") {
      this.currentroom = rooms.classroom.north();
    } else if (this.currentRoom.classroom && directions === "east") {
      this.currentRoom = rooms.classroom.east();
    } else if (this.currentRoom.classroom && directions === "south") {
      this.currentRoom = rooms.classroom.south();
    } else if (this.currentRoom.classroom && directions === "west") {
      this.currentRoom = rooms.classroom.west();
    } else {
      console.log(
        this.currentRoom,
        "That is not a valid direction, please choose north/south/east/west"
      );
    }
  },
};

/*
DO NOT EDIT BELOW THIS LINE
*/

let rooms = {
  hall: {
    name: "hall",
    north: function () {
      return null;
    },
    east: function () {
      return rooms.classroom;
    },
    south: function () {
      return rooms.library;
    },
    west: function () {
      return null;
    },
  },
  classroom: {
    name: "classroom",
    north: function () {
      return null;
    },
    east: function () {
      return null;
    },
    south: function () {
      return null;
    },
    west: function () {
      return rooms.hall;
    },
  },
  library: {
    name: "library",
    north: function () {
      return rooms.hall;
    },
    east: function () {
      return null;
    },
    south: function () {
      return null;
    },
    west: function () {
      return null;
    },
  },
};
console.log(rooms.hall.north());
/*
YOU ARE NOT EXPECTED TO UNDERSTAND THE CODE BELOW THIS 
LINE!
You only need to read it if you are interested in how it works.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start() {
  rl.question(
    "Which room would you like to start in? (hall/classroom/library) ",
    function (room) {
      game.start(room);
      console.log("\n---------------------\n");
      play("start");
    }
  );
}

function play(method) {
  if (!game.currentRoom?.name) {
    throw new Error(
      `It looks like the game isn't quite right! Make sure your \`${method}\` method is correct`
    );
  }
  console.log(`You are in the ${game.currentRoom.name}.\n`);
  rl.question(
    "Which direction would you like to move? (north/east/south/west) ",
    function (direction) {
      game.move(direction);
      console.log("\n---------------------\n");
      play("move");
    }
  );
}

if (global["test"] == undefined) {
  // running in node -> start game
  start();
  test = () => {};
  beforeEach = () => {};
  test.skip = () => {};
} else {
  // running in jest
  // don't start game, close the readline handle
  rl.close();
}

// if we reach here, we are running in jest -> run tests

/* ======= TESTS - ONLY MODIFY TO ENABLE TESTS FOR STRETCH GOALS ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 11-choose-your-own-adventure.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

beforeEach(() => {
  // reset the game object
  game.currentRoom = null;
});

test("start in hall", () => {
  game.start("hall");
  expect(game.currentRoom.name).toEqual("hall");
});

test("start in library", () => {
  game.start("library");
  expect(game.currentRoom.name).toEqual("library");
});

test("start in classroom", () => {
  game.start("classroom");
  expect(game.currentRoom.name).toEqual("classroom");
});

// remove ".skip" if your code correctly handles a non existent room (by setting currentRoom to null/doing nothing)
test.skip("start in non-existent place", () => {
  game.start("does not exist");
  expect(game.currentRoom).toEqual(null);
});

test("start in hall and go south", () => {
  game.currentRoom = rooms.hall;
  game.move("south");
  expect(game.currentRoom.name).toEqual("library");
});

test("start in library and go north", () => {
  game.currentRoom = rooms.library;
  game.move("north");
  expect(game.currentRoom.name).toEqual("hall");
});

test("start in hall and go east", () => {
  game.currentRoom = rooms.hall;
  game.move("east");
  expect(game.currentRoom.name).toEqual("classroom");
});

test("start in classroom and go west", () => {
  game.currentRoom = rooms.classroom;
  game.move("west");
  expect(game.currentRoom.name).toEqual("hall");
});

// remove ".skip" if your code handles trying to go in a direction with no room (by staying in the same room)
test.skip("start in hall and go north (to non-existent room) -> stay in same room", () => {
  game.currentRoom = rooms.hall;
  game.move("north");
  expect(game.currentRoom.name).toEqual("hall");
});

// remove ".skip" if your code handles trying to go in a direction that doesn't exist (by staying in the same room)
test.skip("start in hall and go backwards (non-existent direction) -> stay in same room", () => {
  game.currentRoom = rooms.hall;
  game.move("backwards");
  expect(game.currentRoom.name).toEqual("hall");
});
