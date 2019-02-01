'use strict';
const multer=require('multer');
const fs = require('fs');
const constant = require('./../constants');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './uploads/';
        const imgDir = './uploads/images/'
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            fs.mkdirSync(imgDir);
        }
        cb(null, imgDir);
    },
    filename: function (req, file, cb) {
        var datetimestamp = new Date().getTime();
        const filename = datetimestamp + file.originalname;
        cb(null,filename);
    }
});
const fileFilter = (req, file, cb) => {
    const mimeTypes = ['image/jpeg', 'image/png'];
    if (mimeTypes.includes(file.mimeTypes))
        cb(null , true);
    else
        cb(null, false);
}
const upload = multer({
    storage: storage
})
module.exports=upload;