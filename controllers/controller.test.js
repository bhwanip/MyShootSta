const {
    postVideoShoot,
    getVideoShoot
} = require('../controllers/controller');

const VideoShoot = require('../models/VideoShoot');

jest.genMockFromModule('../models/VideoShoot');
jest.mock('../models/VideoShoot');

const mockVideoShoot = {
  save: jest.fn(),
  getCreatedUrl: () => ('http://localhost:300/pathHead/pathTail.mp4')
};

VideoShoot.mockImplementation((object) => mockVideoShoot);
VideoShoot.loadAll = () => ([{'id':100},{'id': 102}]);

describe('Controllers Test', () => {

  it('Verify postVideoShoot controller', () => {
    let req = {
        protocol: 'http',
        hostname: 'localhost',
        app: {
            settings: {
                port: '3000'
            }
        },
        file: {
            path: '/pathHead/pathTail.mp4'
        },
        body: {
            editor: 'Test Editor',
            title: 'Test Title'

        }
    };
    let res = {
        statusCode: '',
        header: {
            Location: ''
        },
        setHeader: function(key, value){
            this.header[key] = value
        },
        status: function(code){
            this.statusCode = code;
        },
        end: function(){
            return this;
        }
    };
    res = postVideoShoot(req, res, jest.fn());
    expect(res.statusCode).toBe(201);
    expect(res.header.Location).toEqual('http://localhost:300/pathHead/pathTail.mp4');
  });

 it('Verify getVideoShoot controller', () => {
    let res = {
        statusCode: '',
        body: '',
        status: function(code){
            this.statusCode = code;
            return this;
        },
        json: function(object){
            this.body = object;
        }
    };
    getVideoShoot({}, res, jest.fn());
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

})
