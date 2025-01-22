//these handles are there to avoid async await everytime. for writing less lines of code.
const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }

}
/*const asyncHandler = (fn) => async (req,res,next) => {
    try {
        await fn(req,res,next)
        
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
        
    }

} */
//asyncHandler is a higher order function which takes function as input (async) function.




export {asyncHandler}