var elasticsearch = require('elasticsearch')

export const createClient = function (state) {
  return new elasticsearch.Client({
    host: `${state.elasticHost}:${state.elasticPort}`,
    log: 'trace'
  })
}
