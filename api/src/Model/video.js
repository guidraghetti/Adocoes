var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var videoSchema = new Schema({
	_id : ObjectId
});
var Video = mongoose.model('Video', videoSchema);