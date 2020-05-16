import { Mongo } from 'meteor/mongo';

export const DataPoints = new Mongo.Collection('volts', {
  idGeneration: 'MONGO'
})

export default DataPoints
