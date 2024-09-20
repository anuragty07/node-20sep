const Student = require('../models/Student');
const student=require('../models/Student')
async function addStudent(req,res){
    try{
        console.log(req.body);
        let student=new Student(req.body);
        await student.save();
        res.end('DATA ADDED SUCCESFULLY.....')
        
    }catch(err){
        console.log(err)
    }
}

module.exports={
    addStudent
};