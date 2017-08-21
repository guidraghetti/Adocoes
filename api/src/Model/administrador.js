"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const administradorSchema = new Schema({
	matricula: {
		type: String,
		required: true
	},
	organizacao: {
		type: String,
		enum: ["poder judiciário", "ministério público"],
		required: true
	},
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
});

mongoose.model("Administrador", administradorSchema);