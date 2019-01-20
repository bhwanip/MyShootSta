const multer = require('multer');
const {
    UPLOAD_PATH
} = require('../constants');

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, UPLOAD_PATH);
    },
    filename: function (request, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage
});

module.exports = {
    videoUploader: upload
};
