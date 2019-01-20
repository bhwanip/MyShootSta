const mockFn = jest.fn();
jest.mock('../utils/fileUtils', () => ({
    isExisting: (path) => (true),
    readFile: (path) => ([{'a':10, 'b': 'Ten'},{'b': 20, 'b': 'Twenty'}]),
    writeToFile: mockFn
}));

const VideoShoot = require('../models/VideoShoot');

describe('VideoShoot Model Test Suite', () => {

    it('Verify Constructor', () => {
        let shoot = new VideoShoot({'a':10, 'b': 'Ten'});
        expect(shoot.a).toBe(10);
        expect(shoot.b).toEqual('Ten');
    })

    it('Verify loadAll', () => {
        let data = VideoShoot.loadAll();
        expect(data).toEqual([{'a':10, 'b': 'Ten'},{'b': 20, 'b': 'Twenty'}]);
    })

    it('Verify save', () => {
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
