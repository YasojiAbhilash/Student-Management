const Students = require('../models/student');

//get all students details api
const getAllStudentsDetails = async (req, res) => {
    try {
        const allStudents = await Students.find({});

        if(allStudents.length > 0){
            res.status(200).json({
                success : true,
                message : 'List of all Students fetched successfully',
                data : allStudents
            })
        } else{
            res.status(404).json({
                success : false,
                message : 'Students not found!'
            })
        }
        
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please Try again'
        })
    }

}

//get a single student details through id or enrollment number api
const getSingleStudentDetailsById = async (req, res) => {
    const getStudentId = req.params.id;
    const getStudentsById = await Students.findById(getStudentId)

    if(!getStudentsById){
        res.status(404).json({
            success : false,
            message : 'Incorrect Student Id!'
        })
    }else{
        res.status(200).json({
            success : true,
            message : 'Student details fetched successfully',
            data : getStudentsById
        })

    }

}


//add a new student details api
const addNewStudentDetails = async (req, res) => {
    try{
        const newStudentFormData = req.body;
        const newlyAddedStudent = await Students.create(newStudentFormData)

        if(newStudentFormData){
            res.status(201).json({
                success : true,
                message : 'Student added successfully',
                data : newlyAddedStudent,
            })
        }

    }catch(e){
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please Try again'
        })
    }

}

//update a student details
const updateStudentDetailsById = async (req, res) => {
    try {
        const updateStudentFormData = req.body;
        const updateStudentId = req.params.id;
        const updatedStudentDetails = await Students.findByIdAndUpdate(updateStudentId, updateStudentFormData, {new: true})

        if(!updatedStudentDetails){
            res.status(404).json({
                success : false,
                message : 'Incorrect Student Id!'
            })
        }else{
            res.status(200).json({
                success : true,
                message : 'Student Details Updated Successfully',
                data : updatedStudentDetails
            })
        }
        
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please Try again'
        })
    }

}

//delete a student details through id
const deleteStudentDetailsById = async (req, res) => {
    try {
        const studentId = req.params.id;
    const deleteStudent = await Students.findByIdAndDelete(studentId)

    if(!deleteStudent){
        res.status(404).json({
            success : false,
            message : 'Students not found with these ID'
        })
    } else{
        res.status(200).json({
            success : true,
            message : 'Student Details deleted successfully',
            data : deleteStudent
        })
    }
        
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please Try again'
        })
    }

}


module.exports = {getAllStudentsDetails, getSingleStudentDetailsById, addNewStudentDetails, updateStudentDetailsById, deleteStudentDetailsById};