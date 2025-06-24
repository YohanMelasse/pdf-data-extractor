const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "erreur interne au serveur";
  res.status(statusCode).json({message});
  next();
}

export {errorHandler};