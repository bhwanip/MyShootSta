

const mockFn = jest.fn();
jest.mock('../utils/fileUtils', () => ({
    isExisting: jest.fn(),
    readFile: (path) => ([{'a':10, 'b': 'Ten'},{'b': 20, 'b': 'Twenty'}]),
    writeToFile: mockFn
}));

const VideoShoot = require('../models/VideoShoot');
const {isExisting, readFile, writeToFile} = require('../utils/fileUtils');

describe('VideoShoot Model Test Suite', () => {

    it('Verify Constructor', () => {
        isExisting.mockImplementation((path)=> true)
        let shoot = new VideoShoot({'a':10, 'b': 'Ten'});
        expect(shoot.a).toBe(10);
        expect(shoot.b).toEqual('Ten');
    })

    it('Verify loadAll for Existing File', () => {
        isExisting.mockImplementation((path)=> true)
        let data = VideoShoot.loadAll();
        expect(data).toEqual([{'a':10, 'b': 'Ten'},{'b': 20, 'b': 'Twenty'}]);
    })

     it('Verify loadAll for Missing File', () => {
        isExisting.mockImplementation((path)=> false)
        let data = VideoShoot.loadAll();
        expect(data.length).toBe(0);
        expect(data).toEqual([]);
    })

    it('Verify save', () => {
        isExisting.mockImplementation((path)=> true)
        let shoot = new VideoShoot({'c':30, 'b': 'Thirty'});
        shoot.save();
        expect(mockFn.mock.calls.length).toBe(1);
        expect(mockFn.mock.calls[0][1]).toEqual([{'a':10, 'b': 'Ten'},{'b': 20, 'b': 'Twenty'},{'c':30, 'b': 'Thirty'}]);
    })

    it('Verify getCreatedUrl', () => {
        let shoot = new VideoShoot({'url':'test.com'});
        expect(shoot.getCreatedUrl()).toEqual('test.com');
    })
});
