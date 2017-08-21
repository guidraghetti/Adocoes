"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const midiaSchema = require("./midia");

const documentoSchema = new Schema({
	numero: {
		type: String,
		required: true
	},
	dataEmissao: {
		type: Date
	},
	orgaoEmissor: {
		type: String
	},
	tipoDocumento: {
		type: String,
		enum: ["rg", "cnh"],
		required: true
	},
	imagem: {
		type: midiaSchema
	}
});

mongoose.model("Documento", documentoSchema);