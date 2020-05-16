import mongoose, { Schema } from 'mongoose';

const dataPointSchema = new Schema({
  value: Number
}, {
  timestamps: true,
  toObject: { getters: true }
});

const DataPoint = mongoose.model('Volt', dataPointSchema, 'volts');

export default DataPoint;
