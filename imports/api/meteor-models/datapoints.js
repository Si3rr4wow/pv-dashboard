import { Mongo } from 'meteor/mongo';

export const DataPoints = new Mongo.Collection('dataPoints', {
  idGeneration: 'MONGO'
})

export default DataPoints
