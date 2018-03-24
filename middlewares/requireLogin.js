// using lowercase when we export a function vs a class

// next is a function that we call when middleware is finished

module.exports = (req, res, next) => {
  if (!req.user) {
    // If there's no user, this is saying that response is forbidden
    return res.status(401).send({ error: 'You must log in' });
  }
  next();
};
