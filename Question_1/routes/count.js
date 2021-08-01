const express = require("express")
const router = express.Router()

router.use(express.urlencoded({extended:true}))


// const counter = () => {

//     let count = 0
//     for (let i = 0; i <= 5000000000000  ; i++) {
//         count += 1
//     }
//     return count
// }

router.get('/count', async(req, res) => {
    

    let count = 0;
    setTimeout(function() {
        for (let i = 0; i <= 500000000000; i++) {
            count += 1;
        }
	}, duration * 1000)
    res.json({ count })
})

module.exports = router