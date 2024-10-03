const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/createOrder', paymentController.createOrder);
router.post('/sendPaymentEmail', paymentController.sendPaymentEmail);

module.exports = router;
