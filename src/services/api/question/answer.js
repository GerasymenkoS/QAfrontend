import {request} from "../index"

export default (questionUrl) => (
  {
    create: async (values) => {

      const [err, response] = await request.post(`${questionUrl}/answers`, values)
      if (err) throw err.response.data

      return response.data
    },
    all: async () => {
      const [err, response] = await request.get(`${questionUrl}/answers`)
      if (err) throw err.response.data

      return response.data
    },
    find: async (id) => {
      const [err, response] = await request.get(`${questionUrl}/answers` + id)
      if (err) throw err.response.data

      return response.data
    }
  }
)
