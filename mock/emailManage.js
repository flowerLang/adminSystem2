const path = require('./path')

module.exports = [
  {
    url: path.emailManage.default,
    type: 'post',
    response: (config) => {
      const { page, limit } = config.body
      const { data, total } = require('./json/dataManage')
      return {
        data: data.slice((page - 1) * limit, page * limit),
        total,
        code: 0
      }
    }
  },
  {
    url: path.emailManage.attachManage,
    type: 'post',
    response: config => {
      const { page, limit } = config.body
      const { data, total } = require('./json/attachManage')
      return {
        data: data.slice((page - 1) * limit, page * limit),
        total,
        code: 0
      }
    }
  }
]
