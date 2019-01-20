const UPLOAD_PATH = process.env.UPLOAD_PATH || './video_uploads/';
const DB_FILE = process.env.DB_FILE || './db.json';

const fileUploadPath = (req) => (req.protocol + "://" + req.hostname + ':' + req.app.settings.port + '/' + 'video/' + req.file.path.split('/')[1]);

module.exports = {
    UPLOAD_PATH,
    DB_FILE,
    fileUploadPath
};