const db = require("../models");
const multer = require('multer')
const path = require('path')

const Student = db.student

const addStudent = async(req, res) => {

    let info = {
        name: req.body.name,
        class: req.body.class,
        image: req.file.path
    }
    const student = await Student.create(info)
    res.status(200).send(student)
    console.log(student);
}

const getStudent = async(req, res) => {

    const student = await Student.findAll({})
    res.status(200).send(student)
    console.log(student);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '5000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb("give proper file formate to upload")
    }
}).single('image')

module.exports = { addStudent, getStudent, upload }