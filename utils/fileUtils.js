const fs = require('fs');

const createDirectory = (path) => {
    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    } catch (err) {
        throw err;
    }
}

const writeToFile = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
        throw err;
    }
}

const isExisting = (path) => {
    try {
        return fs.existsSync(path);
    } catch (err) {
        throw err;
    }
}

const readFile = (path) => {
    try {
        let data = fs.readFileSync(path);
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createDirectory,
    writeToFile,
    isExisting,
    readFile
};