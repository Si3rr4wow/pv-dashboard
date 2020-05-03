import { Restivus } from 'meteor/nimble:restivus';

import Datapoint from '/imports/api/models/datapoint'

const Api = new Restivus({
  prettyJson: true
})

Api.addRoute('datapoint', { authRequired: false }, {
  post: async function() {
    const datapoint = new Datapoint({ ...this.bodyParams })
    await datapoint.save()
    return {
      statusCode: 200,
      body: { status: 'success', message: 'datapoint added' }
    }
  }
})

export default Api
