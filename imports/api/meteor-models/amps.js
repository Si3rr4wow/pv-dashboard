import { Mongo } from 'meteor/mongo';

export const DataPoints = new Mongo.Collection('amps', {
  idGeneration: 'MONGO'
})

export default DataPoints
