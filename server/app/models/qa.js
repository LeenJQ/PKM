const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QASchema = new Schema({
  question: { type: String, required: true, default: '' },
  answer: { type: String, required: true, default: '' },
  tags: { type: Array, default: [] },
  catalog: { type: String, default: '其他' },
});

QASchema.index({question: 1});

module.exports = mongoose.model('qasssss', QASchema);