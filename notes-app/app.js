console.log("starting app.js ");

const yargs = require("yargs");
const argv = yargs.argv;
const notes = require("./notes");

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("adding note");
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log("removing note");
  notes.removeNote(title);
} else if (command === "read") {
  console.log("reading note");
  notes.readNote(title);
} else if (command === "list") {
  console.log("listing all notes");
  notes.getAll();
} else {
  console.log("unkown command was used ");
}

// const chalk = require("chalk");
// const getNotes = require("./notes");
// const msg = getNotes();
// console.log(msg);

// console.log(chalk.green.bgWhite.bold("success"));
// console.log(process.argv[2]);
