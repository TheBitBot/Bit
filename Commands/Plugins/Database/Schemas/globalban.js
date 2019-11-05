var mongoose = require('mongoose')

var Schema = mongoose.Schema

var GlobalBanSchema = new Schema(
    {
        id: {
            type: String
        },
        reson: {
            type: String,
        } 
    }
)


// Virtual for author's URL
GlobalBanSchema
.virtual('url')
.get(function () {
  return '/GlobalBans' + this._id;
});

//Export model
module.exports = mongoose.model('GlobalBan', GlobalBanSchema);
