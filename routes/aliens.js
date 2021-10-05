const express = require ('express')
const router = express.Router()
const alien = require('../models/alien')

router.get('/', async function(req, res) {
    try{
        const aliens = await alien.find()
        res.json(aliens)
    }catch (err){
         res.send('Error '+err)
     }
}),

router.get('/:id', async function(req, res) {
    try{
        const aliens = await alien.findById(req.params.id)
        res.json(aliens) 
    }catch (err){
         res.send('Error '+err)
     }
}),

router.post('/', async function(req, res){
    const aliens = new alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await aliens.save()
        res.send(a1)
    }catch (err){
        res.send('Error '+err)
    }
}),

router.patch('/:id', async function(req, res) {
    try{
        const aliens = await alien.findById(req.params.id)
        aliens.sub = req.body.sub
        const a1 = await aliens.save()
        res.json(a1)
    }catch(err){
        console.log('error '+err)
        res.send('error')
    }
}),

router.delete('/:id', async function(req, res) {
    try{
        const aliens = await alien.findById(req.params.id)
        aliens.sub = req.body.sub
        const a1 = await aliens.remove()
        res.json(a1)
    }catch(err){
        console.log('error '+err)
        res.send('error')
    }
}),

module.exports = router