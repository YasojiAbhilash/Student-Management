const express = require('express')

const {getAllStudentsDetails, getSingleStudentDetailsById,
     addNewStudentDetails, updateStudentDetailsById,
      deleteStudentDetailsById} = require('../controllers/student-controllers')

//create a router
const router = express.Router()

//apis
router.get('/get', getAllStudentsDetails)
router.get('/get/:id', getSingleStudentDetailsById)
router.post('/add', addNewStudentDetails)
router.put('/update/:id', updateStudentDetailsById)
router.delete('/delete/:id', deleteStudentDetailsById)



module.exports = router;

