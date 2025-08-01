const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        maxLength : [100, 'Name cannot be more than 100 characters'],
        trim : true
    },
    age : {
        type : Number,
        required : [true, 'Age is required'],
        min : [17, 'Age must be 17 years']
    },
    year : {
        type : Number,
        required : [true, 'Year is required'],
        enum  : [1,2,3,4] //year is vaild upto 4 
    },
    enrollment_number : {
        type : String,
        required : [true, 'Erp is must for students'],
        unique : true,
        trim : true,
    },
    branch : {
        type : String,
        required : [true, 'Branch is required'],
        trim : true,
        enum : ['CSE', 'ECE', 'EEE', 'IT', 'CIVIL', 'MECH', 'Others'] //these branches only allowed
    }
})

module.exports = mongoose.model('Students', studentSchema);