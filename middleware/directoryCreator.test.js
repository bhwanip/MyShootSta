const mockFn = jest.fn();
jest.mock('../utils/fileUtils', () => ({
    createDirectory: mockFn
}));

const dirCreator = require('./directoryCreator');

describe('Directory Creator Middleware Test Suite', () => {

    it('Verify Directory Creator Middleware', () => {
        const nextMockFn = jest.fn();
        dirCreator({}, {}, nextMockFn);
        expect(mockFn.mock.calls.length).toBe(1);
        expect(nextMockFn.mock.calls.length).toBe(1);
    })
});