//const fs = require("fs");

const chalk = require("chalk");

const yargs = require("yargs");

const notes = require('./notes.js');

// const msg = getNotes();

// console.log(chalk.red("Successs gfg!"));

yargs.command({
    command : "add",
    describe : "Add a new note",
   
    builder:{
        title : {
            describe : 'Note Title',
            demandOption  : true,
            type : "string"
        },
        body: {
            describe : "Body of notes",
            demandOption  : true,
            type: "string"
        }

    },
    handler : (argv)=>{
        notes.addNotes(argv.title,argv.body);   },

}) 

yargs.command({
    command : "remove",
    describe : "Remove a note",
    handler: function(argv){
        notes.removeNotes(argv.title)
    },
    builder:{
        title : {
            describe : 'Note Title',
            demandOption  : true,
            type : "string"
        }
    }
  
})

yargs.command({
    command: "list",
    describe : "list all notes",
    handler : ()=>{
        console.log("Listing")
    }
})

yargs.command({
    command: "read",
    describe: "Read notes",
    handler: ()=>{
        console.log("Reading")
    }
})

console.log(yargs.argv)

// fs.appendFileSync("notes.txt", ". It's very interesting")node 