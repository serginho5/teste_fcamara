const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  assunto: {
    type: String,
    required: true,
  },
  mensagem: {
    type: String,
    maxlength: 500,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserShema);