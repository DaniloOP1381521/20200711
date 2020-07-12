const routes = require('express').Router();
const pagecodespaces = require('./../controllers/page-codespaces');

routes.get('/', pagecodespaces);

module.exports = routes; 