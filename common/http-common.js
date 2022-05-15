import axios from 'axios'

export default axios.create({
  baseURL: 'https://API-backend-1.longkckl.repl.co/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})