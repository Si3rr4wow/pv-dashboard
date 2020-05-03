import mongoose, { Schema } from 'mongoose';

const dataPointSchema = new Schema({
  type: {
    type: String,
    enum: ['amp', 'volt']
  },
  value: Number
}, {
  timestamps: true,
  toObject: { getters: true }
});

const DataPoint = mongoose.model('DataPoint', dataPointSchema, 'dataPoints');

export default DataPoint;
