const axios = require('axios');
const config = require('../config');

const api = axios.create({
  baseURL: 'https://api.dropboxapi.com/2/',
  headers: {
    'Authorization': `Bearer ${config.accessToken}`,
    'Content-Type': 'application/json'
  }
});

module.exports = api;