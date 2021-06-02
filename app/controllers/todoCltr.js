const Todos = require('../models/todos')

const todoCltr = {}

todoCltr.list=(req,res) =>{
    Todos.find()
    .then((todos) => {
        res.json(todos)
    })
    .catch((err) => {
        res.json(err)
    })
}


todoCltr.create=(req,res)=>{
    const body = req.body
    const todos = new Todos(body)
    todos.save()
        .then((todos) => {
            res.json(todos)
        })
        .catch((err) => {
            res.json(err)
        })
}

todoCltr.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Todos.findByIdAndUpdate(id, body, {new:true, runValidators:true})
    .then((todos)=>{
        res.json(todos)
    })
    .catch((err)=>{
        res.json(err)
    })
}

todoCltr.destroy=(req,res)=>{
    const id=req.params.id
    Todos.findByIdAndDelete(id)
    .then((todos)=>{
        res.json('Item deleted successfully')
    })
    .catch((err)=>{
        res.json(err)
    })
}



module.exports=todoCltr