const express = require("express");
const Note = require("../models/note-model")
const mongoose = require('mongoose')
//const { Note } = require("../../client/src/components");
//const addNote = require("../controllers/note-ctrl")

//migrates note-ctrl to here
const router = express.Router()

router.route('/add').post((req,res) => {
    console.log("prepare to add note");
    const newNote = new Note({
        ObjectId: new mongoose.Types.ObjectId(),
        title : req.body.title,
        content : req.body.content,
    })
    if(!newNote){
        return res.status(400).json({success:false, error:err})
    }
    newNote
    .save()
    .then(()=>{
        return res.status(201).json({
            success:true,
            id:newNote._id,
            message:"Note created!",
        })
    })
    .catch(error=>{
        return res.status(400).json({
            error,
            message:"Note not created!",
        })
    })
});

router.route('/get').get((req,res) => {
    Note.find({}, function(err, notes){
        if(err){
            return res.status(400).json({success:false, error:err})
        }
        return res.status(200).json({success:true, data:notes})
    }).catch(err=>console.log(err))
});

router.route('/delete/:id').delete((req,res) =>{
    Note.remove({_id: req.params.id}, function(err, note){
        if(err){
            return res.status(400).json({success:false, error:err})
        }
        if(!note){
            return res
            .status(404)
            .json({success:false, error:"note not found"})
        }
        return res.status(200).json({success:true, data:note})
    })
});

module.exports = router;