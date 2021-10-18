const express = require("express")
const model = require("./model")
const router = express.Router()

router.post("/", async (req,res) => {
    try{
        const createGame = await model.create({
         name: req.body.name,
         category: req.body.category,
         difficulty: req.body.difficulty   
        })
        res.status(201).json(createGame)
    }catch (error) {
        res.status(401).json(error.message)
    }
})
router.get("/", async (req,res) => {
    try{
        const findGames = await model.find()
        res.status(200).json(findGames)
    }catch (error) {
        res.status(400).json(error.message)
    }
})
router.get("/:id", async (req,res) => {
    try{
        const findGame = await model.findById(req.params.id)
        res.status(200).json(findGame)
    }catch (error) {
        res.status(400).json(error.message)
    }
})
router.patch("/:id", async (req,res) => {
    try{
        const updateGame = await model.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updateGame)
    }catch (error) {
        res.status(400).json(error.message)
    }
})
router.delete("/:id", async (req,res) => {
    try{
        const deleteGame = await model.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json(deleteGame)
    }catch (error) {
        res.status(400).json(error.message)
    }
})


module.exports = router