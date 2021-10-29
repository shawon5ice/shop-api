const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    return res.status(200).json({
        message:"Get Hello from product.js file"
    })
})

router.post('/',(req, res)=>{
    return res.status(201).json({
        message:"Post Hello from product.js file"
    })
})

router.get('/:productId',(req, res)=>{
    const productId = req.params.productId
    return res.status(200).json({
        message: "Get details of product "+productId,
    })
})

router.patch('/:productId', (req,res)=>{
    const productId = req.params.productId
    return res.status(200).json({
        message: "Update product",
    })
})

router.delete('/:productId',(req,res)=>{
    const productId = req.params.productId
    return res.status(200).json({
        message: "Delete product",
    })
})

module.exports = router