describe('Video Uploader Middleware Test Suite', () => {

    it('Verify Video Uploader Middleware', () => {
        let multer = require('multer');
        const mockDiskStorageFn = jest.fn();
        multer.diskStorage = mockDiskStorageFn.mockReturnValue({
            'Key_01': 'Value_01'
        });
        const {
            videoUploader
        } = require('../middleware/videoUploader');
        expect(mockDiskStorageFn.mock.calls.length).toBe(1);
    })
});
