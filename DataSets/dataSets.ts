import mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    FirstName : String,
    LastName :String
});

let UserModel = mongoose.model('users',UserSchema);

function saveUser(user) {
     let userSave = new UserModel();
     userSave.save((err,data)=>{
         if(err){
             console.log(err)
         }
         else{
             console.log("Data inserted");
         }
     })      
     
}

export {saveUser};