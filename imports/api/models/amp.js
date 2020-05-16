import mongoose, { Schema } from 'mongoose';

const dataPointSchema = new Schema({
  value: Number
}, {
  timestamps: true,
  toObject: { getters: true }
});

const DataPoint = mongoose.model('Amp', dataPointSchema, 'amps');

export default DataPoint;
