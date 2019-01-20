const {
    createDirectory
} = require('../utils/fileUtils');

const {
    UPLOAD_PATH,
    fileUploadPath
} = require('../constants');

const directoryCreator = (req, res, next) => {
    try {
        createDirectory(UPLOAD_PATH);
        return next();
    } catch (err) {
        return next(err);
    }
}

module.exports = directoryCreator;