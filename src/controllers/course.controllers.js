import course from "../models/course.model.js";

export const addCourseRequest = async(req, res)=>{
    try {
        const {nameCourse, contextCourse} = req.body
    
        const newCourse = new course({
            nameCourse,
            contextCourse,
            user: req.user.id
        })

        const saveCourse = await newCourse.save()
        res.status(201).json(saveCourse)
    } catch (error) {
        res.send(error)
    }
}

export const allCourseRequest = async(req, res)=>{
    try {
        const coursesFound = await course.find({user: req.user.id})
        if(!coursesFound) return res.send([])
        res.send(coursesFound)
    } catch (error) {
        console.log(error)
    }
}

export const getCourseRequest = async(req, res)=>{
    try {
        const {id} = req.params
        const courseFound = await course.find({_id: id})
        if(!courseFound) return res.send([])
        res.send(courseFound)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCourseRequest = async(req, res)=>{
    try {
        const {id} = req.params
        
        const courseFound = await course.findByIdAndDelete({_id: id})
        if(!courseFound) return res.send([])
        res.send(courseFound)
    } catch (error) {
        console.log(error)
    }
}


export const updateCourseRequest = async(req, res)=>{
    try {
        const {id} = req.params
        
        const courseFound = await course.findByIdAndUpdate({_id: id}, req.body,{
            new: true
        })
        if(!courseFound) return res.send([])
        res.send(courseFound)
    } catch (error) {
        res.send(error)
    }
}