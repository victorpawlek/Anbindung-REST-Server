const express = require('express');
const asyncHandler = require('express-async-handler');
const { getCars, changeStatus, delCar, addCar } = require('../model/cars.js');

const router = express.Router();

router.get(
  '/hello',
  asyncHandler(async (req, res) => res.send('Hello')),
);
router.get(
  '/cars',
  asyncHandler(async (req, res) => res.status(200).json(getCars())),
);
router.patch(
  '/cars/:id',
  asyncHandler(async (req, res) =>
    res.status(200).json(changeStatus(Number(req.params.id), req.body.status)),
  ),
);
router.delete(
  '/cars/:id',
  asyncHandler(async (req, res) => res.status(200).json(delCar(Number(req.params.id)))),
);
router.post(
  '/cars',
  asyncHandler(async (req, res) => res.status(200).json(addCar(req.body))),
);

module.exports = router;
