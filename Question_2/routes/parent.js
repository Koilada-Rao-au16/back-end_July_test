const express = require("express")
const router = express.Router()

router.post('/parenttAdd', async function (req, res){
   
    if (!req.body) {
        res.send({ message: "Content can not be empty!" });
        return;
      }
    
        try {
            let data = await ParentModel.create([{ 
                name : req.body.name,
                phonenumber: req.body.phonenumber,
                email : req.body.email,
                occupation : req.body.occupation,
            }])
            
            res.json('DATA SAVED')
            
        } catch (error) {
            console.log(error);
            res.send(error);
        }
        
  
})


router.get('/getParents', async (req, res) => {

    try {
        const AllParents =  await ParentModel.find({})
        res.json(AllParents);
        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    
})



router.put('/updateParent/:id',async (req, res)=> {

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

        const updateResult = await ParentModel.updateOne({_id: req.params.id}, updates )
        res.json({updateResult})

        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    
    
})



router.delete('/deleteParent/:id',async (req,res) =>{


    try {
        
        const deleteResult = await ParentModel.deleteOne({_id: req.params.id})

        res.json({deleteResult})

        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
   
})

module.exports = router