import express from 'express';
import getSingleOrder from '../controller/order/getSIngleOrder.js';
import getAllOrders from '../controller/order/getAllOrders.js';

const router = express.Router();

router.get('/', protect, admin, getAllOrders);

router.get('/:id', protect, getSingleOrder);
