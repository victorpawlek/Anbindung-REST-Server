let cars = require('./cars.json');

function getCars() {
  return cars;
}

function changeStatus(id, status) {
  const car=cars.find((el) => el.id === id).status = status;
  return car;
}

function delCar(id) {
  cars = cars.filter((el) => el.id !== id);
  return cars;
}

function addCar(data) {
  const id = Math.max(...cars.map((el) => el.id)) + 1;
  const car = data;
  car.id = id;
  cars.push(car);
  return car;
}

module.exports = { getCars, changeStatus, delCar, addCar };
