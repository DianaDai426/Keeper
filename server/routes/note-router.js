const express = require("express");
const { Note } = require("../../client/src/components");
const NoteCtrl = require("../controllers/note-ctrl")

const router = express.Router()

router.post("/note", (req,res)=>{
    NoteCtrl.addNote
});

router.get("/note",function(req,res){
    NoteCtrl.getNotes
});

router.delete("/delete", function(req,res){
    NoteCtrl.deleteNote
})

module.exports = router