const catchErrors = (fn) => {

  /**
   * @async
   * @function catchErrors
   * @param fn
   * @param {Object} req -the request object
   * @param {Object} res - the response object
   * @function next - returns the next middleware function
   * @return {promise<void>}
   * @throws {InternalServerError} - throws when an error related to the server occurred
   */
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error)
      return next(error);
    }
  }
};

export {catchErrors};