import test from 'ava';
import * as sinon from 'sinon';
import MusicService from "../../src/services/impl/music_service_impl";
import MusicRepository from "../../src/repositories/impl/music_repository_impl";
import MusicController from "../../src/controllers/music_controller";
import { RequestData, Context, HttpError } from 'rey-common'

test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always('Restore Sandbox and Configuration After Each Test', (t: any): void => {
    t.context.sandbox.restore();
});

test.serial('SUCCESS, getAllMusics case composer found', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepository;
    const musicService = new MusicService(musicRepository);
    const musicController = new MusicController(musicService);
    
    const musics = [{
        id: 1,
        composer_id: 1,
        title: 'stand by me',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    }];

    const expected = {
        data: musics
    };

    const mockService = t.context.sandbox.mock(musicService).expects('getAllMusics').resolves(musics);
    const data: RequestData = {
        query: {},
        params: {},
        body: {},
        files: {}
    };

    const context: Context = {
        request_id: "1",
        user_id: 1,
        email: "bagas@go-jek.com",
        name: "bagasys",
        phone_number: "081259591600"
    };
    
    await musicController.getAllMusics(data, context)
        .then(response => {
            t.true(mockService.called);
            t.deepEqual(response, expected);
        });
});

test.serial('SUCCESS, getMusicById case found', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepository;
    const musicService = new MusicService(musicRepository);
    const musicController = new MusicController(musicService);
    
    const music = {
        id: 1,
        composer_id: 1,
        title: 'stand by me',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const expected = {
        data: music
    };

    const mockService = t.context.sandbox.mock(musicService).expects('getMusicById').resolves(music);
    const data: RequestData = {
        query: {},
        params: {id: 1},
        body: {},
        files: {}
    };

    const context: Context = {
        request_id: "1",
        user_id: 1,
        email: "bagas@go-jek.com",
        name: "bagasys",
        phone_number: "081259591600"
    };
    
    await musicController.getMusicById(data, context)
        .then(response => {
            t.true(mockService.called);
            t.deepEqual(response, expected);
        });
});

test.serial('SUCCESS, createMusic', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepository;
    const musicService = new MusicService(musicRepository);
    const musicController = new MusicController(musicService);
    
    const music = {
        id: 1,
        composer_id: 1,
        title: 'stand by me',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const expected = {
        data: music
    };

    const mockService = t.context.sandbox.mock(musicService).expects('createMusic').resolves(music);
    const data: RequestData = {
        query: {},
        params: {},
        body: {composer_id: 1, title: 'stand by me'},
        files: {}
    };

    const context: Context = {
        request_id: "1",
        user_id: 1,
        email: "bagas@go-jek.com",
        name: "bagasys",
        phone_number: "081259591600"
    };
    
    try {
        const music = await musicController.createMusic(data, context)
        t.true(mockService.called);
        t.deepEqual(expected ,music);
    } catch (error) {
    }
});

test.serial('SUCCESS, updateMusic', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepository;
    const musicService = new MusicService(musicRepository);
    const musicController = new MusicController(musicService);
    
    const music = {
        id: 1,
    };

    const expected = {
        data: music
    };

    const mockService = t.context.sandbox.mock(musicService).expects('updateMusic').resolves(music);
    const data: RequestData = {
        query: {},
        params: {},
        body: {composer_id: 1, title: 'stand by me'},
        files: {}
    };

    const context: Context = {
        request_id: "1",
        user_id: 1,
        email: "bagas@go-jek.com",
        name: "bagasys",
        phone_number: "081259591600"
    };
    
    try {
        const music = await musicController.updateMusic(data, context)
        t.true(mockService.called);
        t.deepEqual(expected ,music);
    } catch (error) {
    }
});

test.serial('SUCCESS, deleteMusic', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepository;
    const musicService = new MusicService(musicRepository);
    const musicController = new MusicController(musicService);
    
    const music = {
        id: 1,
    };

    const expected = {
        data: music
    };

    const mockService = t.context.sandbox.mock(musicService).expects('deleteMusic').resolves(music);
    const data: RequestData = {
        query: {},
        params: {id: 1},
        body: {},
        files: {}
    };

    const context: Context = {
        request_id: "1",
        user_id: 1,
        email: "bagas@go-jek.com",
        name: "bagasys",
        phone_number: "081259591600"
    };
    
    try {
        const response = await musicController.deleteMusic(data, context)
        t.true(mockService.called);
        t.deepEqual(expected, response);
    } catch (error) {
    }
});
