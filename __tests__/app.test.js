process.env.NODE_ENV = "test";
process.env.UPLOAD_PATH = "./__tests__/video_uploads";
process.env.DB_FILE = "./__tests__/db.json";

const {
    UPLOAD_PATH,
    DB_FILE
} = require('../constants');
const request = require("supertest");
const app = require("../app");
const fs = require('fs');
const VideoShoot = require('../models/VideoShoot');

const TEST_DATA = [{
        "uuid": 1,
        "url": "https://somecdn.com/dWbyg4oUQBVH8Rznqkfl",
        "title": "Video 1",
        "editor": "Editor 1"
    },
    {
        "uuid": 2,
        "url": "https://somecdn.com/0d83iq6TNa4OS5WPBHlE",
        "title": "Video 2",
        "editor": "Editor 2"
    }
];

const deleteFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

describe("API Integeration Test", () => {

    beforeEach(() => {
        TEST_DATA.forEach((data) => {
            let shoot = new VideoShoot(data);
            shoot.save(DB_FILE);
        });
    })

    afterEach(() => {
        fs.unlinkSync(DB_FILE);
        deleteFolderRecursive(UPLOAD_PATH);
    })

    it("GET should respond with an array of video shoots", async (done) => {
        const response = await request(app).get("/api/videos");
        expect(response.body.length).toBe(2);
        expect(response.statusCode).toBe(200);
        done();
    });

    it("POST should add a video shoot", async (done) => {
        let postresponse = null;
        postresponse = await request(app).post('/api/videos')
            .field('title', 'Video 3')
            .field('editor', 'Editor 3')
            .attach('videoshoot', './__tests__/test.mp4');
        expect(postresponse.statusCode).toBe(201);
        await verifyGetResponseAfterPost(app);
        verifyVideosUploadedCount();
        done();
    });

    const verifyGetResponseAfterPost = async (app) => {
        const getresponse = await request(app).get("/api/videos");
        expect(getresponse.body.length).toBe(3);
        expect(getresponse.statusCode).toBe(200);
    };

    const verifyVideosUploadedCount = () => {
        let files = fs.readdirSync(UPLOAD_PATH);
        expect(files.length).toBe(1);
    };

});
