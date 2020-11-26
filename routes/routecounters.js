const express = require('express');

const router = express.Router();

const Counter = require('../models/counter');
const CtrlCounter = require('../controllers/controllercounter');

/** definition des routes */

router.post('/',CtrlCounter.createCounter);
  
router.get('/',CtrlCounter.getAllCounter);

router.get('/:name',CtrlCounter.getOneCounter);

router.put('/:name', CtrlCounter.increaseCounter);

router.delete('/:name', CtrlCounter.decreaseCounter);


module.exports = router;