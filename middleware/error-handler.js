const {CustomAPIError} = require('../erorrs/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.status).json({ msg : err.message })
    }
}

module.exports = errorHandlerMiddleware