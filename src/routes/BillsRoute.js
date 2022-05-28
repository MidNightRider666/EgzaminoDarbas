const express = require('express');
const { GetBills, InsertBills, deleteBills } = require('../Controller/BillsController');
const { validateToken } = require('../Utilities/middleware');

const BillRoutes = express();

BillRoutes.get('/bills/:id', validateToken, GetBills);
BillRoutes.post('/bills/post', validateToken, InsertBills);
BillRoutes.delete('/bills/:id', validateToken, deleteBills);

module.exports = BillRoutes;
