const express = require('express');

const {
    createDirectory
} = require('../utils/fileUtils');

const {
    UPLOAD_PATH,
    fileUploadPath
} = require('../constants');

const {
    postVideoShoot,
    getVideoShoot
} = require('../controllers/controller');

const {
    videoUploader,
    directoryCreator
} = require('../middleware');

const router = express.Router();

router.post('/videos', directoryCreator, videoUploader.single('videoshoot'), postVideoShoot);
router.get('/videos', getVideoShoot)

module.exports = router;
