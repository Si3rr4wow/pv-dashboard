import { Meteor } from 'meteor/meteor'
import { Restivus } from 'meteor/nimble:restivus';

import Volt from '/imports/api/models/volt'
import Amp from '/imports/api/models/amp'

const Api = new Restivus({
  prettyJson: true
})

// this.bodyParams = {
//   volts: Number,
//   amps: Number
// }

const saveData = async (datapoint, callback) => {
  try {
    const amp = new Amp({ value: datapoint.amps || 0 })
    const volt = new Volt({ value: datapoint.volts || 0 })

    await amp.save()
    await volt.save()
  } catch(e) {
    callback(e, {response: 'server-error', body: 'Something went wrong'})
  }

  callback(null, {response: 'success', body: 'Datapoint added'})
}

const syncSaveData = Meteor.wrapAsync(saveData)

Api.addRoute('datapoint', { authRequired: false }, {
  post: async function() {
    syncSaveData(this.bodyParams)
  }
})

export default Api
