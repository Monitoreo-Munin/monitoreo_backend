'use strict'

const express = require('express');
const controller = require('./servers.controller');
const router = express.Router();

router.get('/', controller.getServers);
router.get('/:id', controller.getServer);
router.post('/', controller.postServer);
router.put('/', controller.putServer);
router.delete('/:id', controller.deleteServer);

module.exports = router;