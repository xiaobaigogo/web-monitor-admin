let BASE_URL = ''
let TIME_OUT = 10000


switch (process.env.NODE_ENV) {
  case 'development':
    // BASE_URL = 'http://123.207.32.32:8000'
    BASE_URL = 'http://127.0.0.1:3000'
    TIME_OUT = 5000
    break;
  case 'production':
    BASE_URL = 'http://0000'
    TIME_OUT = 5000
    break;
  default:
    BASE_URL = 'http://127.0.0.1:3000'
    TIME_OUT = 5000
    break;
}

export {
  BASE_URL,
  TIME_OUT
}