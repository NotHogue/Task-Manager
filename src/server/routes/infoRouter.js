const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController.js')


// router.get('/all', infoController.getAll, (req, res) => {
//     res.status(200).json(res.locals.data);
// })
router.get('/', infoController.getMoreData, (req, res) => {
    res.status(200).json(res.locals.data);
})
router.post('/', infoController.sendData, (req, res) => {
    res.status(200).json(res.locals.data);
})

module.exports = router;
