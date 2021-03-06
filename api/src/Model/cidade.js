"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cidadeSchema = Schema({
	nome: {
		type: String,
		required: true,
		unique: true
	},
	refEstado: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "estados"
	}
});

mongoose.model("Cidade", cidadeSchema);