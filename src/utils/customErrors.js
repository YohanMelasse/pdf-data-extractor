class NotFound extends Error {
  constructor (statusCode = 404, message ) {
    this.statusCode = statusCode;
    this.message = message;
  }
};

class BadRequest extends Error {
  constructor (statusCode = 400, message ) {
    this.statusCode = statusCode;
    this.message = message;
  }
};

class Unauthorized extends Error {
  constructor (statusCode = 401, message ) {
    this.statusCode = statusCode;
    this.message = message;
  }
};

class InternalServerError extends Error {
  constructor (statusCode = 500, message ) {
    this.statusCode = statusCode;
    this.message = message;
  }
};

export {NotFound, BadRequest, Unauthorized, InternalServerError};