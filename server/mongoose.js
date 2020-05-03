import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.Promise = require('bluebird');

mongoose.ObjectId.get(v => {
  if(v && Object.keys(v).every(key => ['_bsontype', 'id'].includes(key))) {
    return v.toString();
  }

  return v
});
