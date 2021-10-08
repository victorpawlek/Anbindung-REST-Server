/* eslint no-unused-vars: off */

const errorHandler = (err, req, res, next) => {
  res.status(400).send(err.message);
  //
};

const notFound = (req, res) => {
  res.status(404).send('Route wurde nicht gefunden');
  //
};

module.exports = { errorHandler, notFound };
