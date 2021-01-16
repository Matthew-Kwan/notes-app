/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {

  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = async (note,id) => {
  const response = await axios.put(`${baseUrl}/${id}`, note)
  return response.data
}

const deleteNote = async (note,id) => {
  const response = await axios.delete(`${baseUrl}/${id}`,note)
  return response
}

export default { getAll, create, update, deleteNote }