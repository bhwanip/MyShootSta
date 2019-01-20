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
    videoUploader
} = require('../middleware/videoUploader');

const directoryCreator = require('../middleware/directoryCreator');

const router = express.Router();

//createDirectory(UPLOAD_PATH);

/*router.post('/videos', videoUploader.single('videoshoot'), (req, res, next) => {
    try {
        let filePath = fileUploadPath(req);
        const dbEntry = {
            id: uuid4(),
            url: filePath,
            editor: req.body.editor,
            title: req.body.title
        };
        console.log(JSON.stringify(dbEntry));
        const newShoot = new VideoShoot(dbEntry);
        newShoot.save();
        res.setHeader('Location', newShoot.getCreatedUrl());
        res.status(201);
        return res.end();   
    } catch (err) {
        return next(err);
    }

});

router.get('/videos', (req, res, next) => {
    try {
        let dbData = VideoShoot.loadAll();
        return res.status(200).json(dbData);
    } catch (err) {
        return next(err);
    }
})*/

router.post('/videos', directoryCreator, videoUploader.single('videoshoot'), postVideoShoot);

router.get('/videos', getVideoShoot)

module.exports = router;
