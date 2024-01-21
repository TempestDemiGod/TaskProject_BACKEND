export const validateSchema = (schema)=> (req, res , next)=>{
    try {
        schema.parse(req.body)
        next()
    } catch (e) {
        return res.status(400).json( e.errors.map(error => error.message) )
    }
}

export const validateCourseSchema = (schema) => (req, res, next) =>{
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json( error.errors.map(error => error.message) )
    }
}

export const validateTasksSchema = (schema) => (req, res,next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        console.log(error.errors.map(error => error.message))
        return res.status(400).json(error.errors.map(error => error.message))
    }
}