const {
  fetchTableData,
  updateTableField,
  deleteTableField,
  addTableField,
} = require('./airbase')

const selectResponse = async request => {
  if (request.method == 'GET') {
    return await fetchTableData(request)
  }
  if (request.method == 'POST') {
    return await addTableField(request)
  }
  if (request.method == 'PUT') {
    return await updateTableField(request)
  }
  if (request.method == 'DELETE') {
    return await deleteTableField(request)
  }
}

module.exports = { selectResponse }
