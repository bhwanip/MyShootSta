const VideoShoot = require('../models/VideoShoot');
const uuid4 = require('uuid4');

const {
    UPLOAD_PATH,
    fileUploadPath
} = require('../constants');

const postVideoShoot = (req, res, next) => {
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

}

const getVideoShoot = (req, res, next) => {
    try {
        let dbData = VideoShoot.loadAll();
        return res.status(200).json(dbData);
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    postVideoShoot,
    getVideoShoot
}