import express from 'express';
import getSingleOrder from '../controller/order/getSIngleOrder.js';
import getAllOrders from '../controller/order/getAllOrders.js';
import addNewOrder from '../controller/order/addNewOrder.js';
import cors from '../middleware/cors.js';
import { admin, protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, admin, getAllOrders).post(protect, addNewOrder);

router.get('/:id', protect, getSingleOrder);

export default router;
