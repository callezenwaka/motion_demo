'use strict';

// import packages and dependencies
const username = require('../controllers/username');
const express = require('express');
const router = express();

router.get('/', username.getAll);
 
router.post('/', username.postOne);
 
router.put('/:id', username.updateOne);
 
router.get('/:id', username.getOne);
 
router.delete('/:id', username.deleteOne);
 
module.exports = router;