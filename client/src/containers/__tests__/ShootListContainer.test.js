import React from 'react';
import { shallow } from 'enzyme';

import ShootListContainer from '../ShootListContainer';

//TEST DATA JSON RESPONSE FOR GET /api/videos
const videos = [
    {
        "id" : 1,
        "url": "https://test.video.one",
        "title": "Test Title One",
        "editor": "Test Editor One"
    },
    {
        "id" : 2,
        "url": "https://test.video.two",
        "title": "Test Title Two",
        "editor": "Test Editor Two"
    }
]

describe('<ShootListContainer/>', () => {
  it('verify state when server returns a successful response', done => { 
    const mockJsonPromise = Promise.resolve(videos); 
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); 
    
    const wrapper = shallow(<ShootListContainer />); 
                            
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/videos');

    process.nextTick(() => { 
      expect(wrapper.state()).toEqual({
        videos
      });

      global.fetch.mockClear(); 
      done(); 
    });
  });
});
