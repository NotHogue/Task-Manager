const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController.js')


router.get('/', infoController.getMoreData, (req, res) => {
    res.status(200).json(res.locals.data);
})

module.exports = router;
