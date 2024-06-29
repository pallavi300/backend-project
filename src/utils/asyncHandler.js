// for promisses

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err))
    }
}


export { asyncHandler }








//for trycatch

// const asyncHandler = (fn) => async (req, res, next,) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess: false,
//             message: err.message
//         })

//     }
// }


// const asyncHandler = ()=>{()=>{}}
// const asyncHandler = ()=>()=>{}

