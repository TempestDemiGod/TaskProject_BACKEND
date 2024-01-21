import Task from '../models/task.model.js'


export const addTaskRequest = async( req, res)=>{
    
    try {
        const newTask = new Task({...req.body, user: req.user.id})
        const saveTask = await newTask.save()
        res.send(saveTask)
    } catch (error) {
        res.send(error)
    }
}
export const getTaskRequest = async( req, res)=>{
    try {
        const TasksFound = await Task.find({course: req.params.id})

        if(!TasksFound) return res.status(400).send([])

        res.send(TasksFound)
    } catch (error) {
        res.send(error)
    }
}
export const getTasksRequest = async( req, res)=>{
    try {
        const TasksFound = await Task.find({user: req.user.id}).populate("course")
        console.log(req.user.id)
        if(!TasksFound) return res.send([])

        res.send(TasksFound)
    } catch (error) {
        res.send(error)
    }
}
export const updateTaskRequest = async( req, res)=>{
    try {
        const {id} = req.params

        const updateTask = await Task.findByIdAndUpdate({_id: id}, req.body ,{
            new: true
        })

        res.status(202).send(updateTask)
    } catch (error) {
        res.send(error)
    }
}
export const deleteTaskRequest = async( req, res)=>{
    try {
        const {id} = req.params

        const tasksDelete = await Task.findByIdAndDelete(id)

        res.status(204).send('ok')
    } catch (error) {
        res.send(error)
    }
}