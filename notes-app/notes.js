const fs  = require('fs');

const getNotes = ()=> {
    return "Here are the notes";
}

const addNote = (title, body)=>{
   debugger
    const notes = loadNotes();
   // console.log(notes);
    notes.push({
        title : title,
        body : body
    })

    saveNotes(notes)
} 

const removeNotes = (title)=>{
    const notes = loadNotes();
   // console.log(notes);
   const notesToSave = notes.filter((note)=> note.title != title)
    // notes.push({
    //     title : title
    // })

    saveNotes(notesToSave)
}

const  loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSSON = dataBuffer.toString();
        return JSON.parse(dataJSSON)
    } catch (e){
        return [];
    }
    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)

}

module.exports = 
{
   getNotes :  getNotes,
   addNotes: addNote,
   removeNotes: removeNotes
}