const {
    writeToFile,
    isExisting,
    readFile
} = require('../utils/fileUtils');

const {
    DB_FILE
} = require('../constants');

class VideoShoot {

    constructor(object) {
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                this[key] = object[key];
            }
        }
    }

    save() {
        let dbData = VideoShoot.loadAll();
        dbData.push(this);
        writeToFile(DB_FILE, dbData);
    }

    getCreatedUrl() {
        return this['url'];
    }

    static loadAll() {
        return (isExisting(DB_FILE) ? readFile(DB_FILE) : []);
    }
}

module.exports = VideoShoot;