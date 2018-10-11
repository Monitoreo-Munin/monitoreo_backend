'use strict'

const express = require('express');
const controller = require('./users.controller');
const router = express.Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.postUser);
router.put('/', controller.putUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;