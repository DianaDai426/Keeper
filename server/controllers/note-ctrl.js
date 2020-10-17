//implement all necessary operation
const Note = require("../models/note-model")

//create a new note with unique ObjectId and add it to the database
addNote = (req,res)=>{
    console.log("prepare to add note");
    const note = new Note({
        ObjectId: new Mongoose.Types.ObjectId(),
        title : req.title,
        content : req.content,
    })
    if(!note){
        return res.status(400).json({success:false, error:err})
    }
    note
    .save()
    .then(()=>{
        return res.status(201).json({
            success:true,
            id:note._id,
            message:"Note created!",
        })
    })
    .catch(error=>{
        return res.status(400).json({
            error,
            message:"Note not created!",
        })
    })
}

//delete a note 
deleteNote = async (req,res)=>{
    await Note.findOneAndDelete({_id:req.params.ObjectId}, function(err, note){
        if(err){
            return res.status(400).json({success:false, error:err})
        }
        if(!movie){
            return res
            .status(404)
            .json({success:false, error:"note not found"})
        }
        return res.status(200).json({success:true, data:note})
    }).catch(err=>console.log(err))
}

getNotes = async (req,res)=>{
    await Note.find({}, function(err, notes){
        if(err){
            return res.status(400).json({success:false, error:err})
        }
        return res.status(200).json({success:true, data:notes})
    }).catch(err=>console.log(err))
}

module.export = {
    addNote,
    deleteNote,
    getNotes
}