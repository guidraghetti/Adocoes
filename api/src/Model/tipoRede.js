"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipoRedeSchema = new Schema({
	nome: {
		type: String,
		required: true,
		unique: true
	}
});

mongoose.model("TipoRede", tipoRedeSchema);