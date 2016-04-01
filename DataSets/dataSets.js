var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    FirstName: String,
    LastName: String
});
var UserModel = mongoose.model('users', UserSchema);
function saveUser(user) {
    var userSave = new UserModel();
    userSave.save(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Data inserted");
        }
    });
}
exports.saveUser = saveUser;
