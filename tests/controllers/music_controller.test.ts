import test from 'ava';
import * as sinon from 'sinon';
import MusicService from "../../src/services/impl/music_service_impl";
import MusicRepository from "../../src/repositories/impl/music_repository_impl";
import MusicController from "../../src/controllers/music_controller";
import { RequestData, Context } from 'rey-common'

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