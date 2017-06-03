const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const videoSchema = new Schema({
	_id : ObjectId
});
const Video = mongoose.model('Video', videoSchema);