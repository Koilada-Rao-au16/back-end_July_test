const express = require("express")
const router = express.Router()
const StudentModel = require('../models/student')

router.get('/student', async(req, res) => {
    let studentData = await StudentModel.find({})
    console.log(studentData)
    res.json({studentData})
})
router.post('/studentAdd/:parent', async(req, res) => {
    if (!req.body) {
        res.send({ message: "Content can not be empty!" });
        return;
      }
    
      const addressSchema = {
        line1: req.body.line1,
        line2: req.body.line2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
    }

        try {
            let data = await StudentModel.create([{ 
                name : req.body.name,
                rollNumber: req.body.rollNumber,
                standard : req.body.standard,
                section : req.body.section,
                photoURL : req.body.photoURL,
                addresses : addressSchema,
                parent : req.body.parent
            }])

            res.json('DATA SAVED')
            
        } catch (error) {
            console.log(error);
            res.send(error);
        }
})


router.put('/updateStudent/:id',async (req, res)=> {

    const updates = {
        $set: {name : req.body.name,
                rollNumber : req.body.rollNumber
        }
    }
    if (!req.body) {
        res.send({ message: "Content can not be empty!" });
        return;
      }

    try {

        const updateResult = await StudentModel.updateOne({_id: req.params.id}, updates )
        res.json({updateResult})

        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    
    
})


router.get('/data/:id', async function (req, res) {

    const id = req.params.id;

    try {
        
        const foundStudent = await StudentModel.aggregate([
            {
              $match: { _id: id }
            }
          ])

        res.send(foundStudent);

    } catch (error) {
        res.send(error)
    }
})

router.delete('/deleteStudent/:id', async (req,res) =>{


    try {
        
        const deleteResult = await StudentModel.deleteOne({_id: req.params.id})

        res.json({deleteResult})

        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
   
})




module.exports = router