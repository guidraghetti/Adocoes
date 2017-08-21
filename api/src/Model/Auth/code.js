"use strict";

// TODO: consider hashing the authorization code

const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
	value: {
		type: String,
		required: true
	},
	redirectUri: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	clientId: {
		type: String,
		required: true
	}
});

mongoose.model("Code", codeSchema);