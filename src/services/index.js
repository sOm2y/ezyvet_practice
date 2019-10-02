import axios from 'axios'
const products = [
  {
    name: 'Sledgehammer',
    price: 125.75
  },
  {
    name: 'Axe',
    price: 190.5
  },
  {
    name: 'Bandsaw',
    price: 562.13
  },
  {
    name: 'Chisel',
    price: 12.9
  },
  {
    name: 'Hacksaw',
    price: 18.45
  }
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://www.mocky.io/v2/5d9448492f000058008ff605',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 400 || res.status === 403) {
          reject(res)
        }

        resolve(products)
      })
      .catch(err => {
        reject(err.response)
      })
  })
}
