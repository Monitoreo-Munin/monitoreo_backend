'use strict'

const express = require('express');
const controller = require('./empresa.controller');
const router = express.Router();


router.get('/', controller.getEmpresas);
router.get('/:id', controller.getEmpresa);
router.post('/', controller.postEmpresa);
router.put('/', controller.putEmpresa);
router.delete('/:id', controller.deleteEmpresa);

module.exports = router;