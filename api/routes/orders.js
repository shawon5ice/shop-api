const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    return res.status(200).json({
        message:"Get Hello from orders.js file"
    })
})

router.post('/',(req, res)=>{
    return res.status(201).json({
        message:"Post Hello from orders.js file"
    })
})

router.get('/:orderId',(req, res)=>{
    const orderId = req.params.orderId
    return res.status(200).json({
        message: "Get details of order "+orderId
    })
})

router.patch('/:orderId', (req,res)=>{
    const orderId = req.params.orderId
    return res.status(200).json({
        message: "Update order",
    })
})

router.delete('/:orderId',(req,res)=>{
    const orderId = req.params.orderId
    return res.status(200).json({
        message: "Delete order",
    })
})

module.exports = router