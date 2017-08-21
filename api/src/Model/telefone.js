"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const telefoneSchema = new Schema({
	ddd: {
		type: Number,
		required: true
	},
	numero: {
		type: Number,
		required: true
	}
});

mongoose.model("Telefone", telefoneSchema);