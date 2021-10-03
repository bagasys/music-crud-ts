import { HttpError } from 'rey-common';
import test from 'ava';
import * as sinon from 'sinon';
import MusicRepositoryImpl from '../../src/repositories/impl/music_repository_impl'
import MusicServiceImpl from '../../src/services/impl/music_service_impl';
test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always('Restore Sandbox and Configuration After Each Test', (t: any): void => {
    t.context.sandbox.restore();
});

test.serial('SUCCESS, getMusicById case music found', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const music = {
        id: 1,
        title: "lagu rindu",
        composer_id: 1,
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('findById').resolves(music);
    await musicService.getMusicById(1)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, music);
        });
});

test.serial('FAIL, getMusicById case music not found', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const music = {
        id: 1,
        title: "lagu rindu",
        composer_id: 1,
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('findById').resolves(null);
    try {
        await musicService.getMusicById(1);
    } catch (error) {
        t.true(mockRepository.called);
        t.true(error instanceof HttpError.NotFoundError);
    }
});

test.serial('SUCCESS, getAllMusics', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const music = {
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('findAll').resolves([music]);
    await musicService.getAllMusics()
        .then(response => {
            t.true(mockRepository.called);
            t.deepEqual(response, [music]);
        });
});


test.serial('SUCCESS, createMusic', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const music = {
        id: 1,
        composer_id: 1,
        title: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('create').resolves(music);
    await musicService.createMusic({title: "stand by me"})
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, music);
        });
});

test.serial('SUCCESS, updateMusic', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('update').resolves(data);
    const mockRepository2 = t.context.sandbox.mock(musicRepository).expects('findById').resolves({id: 1, name: "bagas"});
    await musicService.updateMusic(1, {title: "stand by you"})
        .then(response => {
            t.true(mockRepository2.called);
            t.true(mockRepository.called);
            t.deepEqual(response, data);
        });
});

test.serial('FAIL, updateMusic case music not found', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('update').resolves(data);
    const mockRepository2 = t.context.sandbox.mock(musicRepository).expects('findById').resolves(null);
    try {
        await musicService.updateMusic(1, {title: "stand by you"})
    } catch (error) {
        t.true(mockRepository2.called);
        t.true(error instanceof HttpError.NotFoundError);
    }
});

test.serial('SUCCESS, deleteMusic', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('delete').resolves(1);
    const mockRepository2 = t.context.sandbox.mock(musicRepository).expects('findById').resolves({id: 1, title: "stand by me"});
    await musicService.deleteMusic(1)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, true);
        });
});

test.serial('FAIL, deleteComposer case composer not found', async (t: any): Promise<void> => {
    const musicRepository = new MusicRepositoryImpl;
    const musicService = new MusicServiceImpl(musicRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(musicRepository).expects('delete').resolves(1);
    const mockRepository2 = t.context.sandbox.mock(musicRepository).expects('findById').resolves(null);
    
    try {
        await musicService.deleteMusic(1);
    } catch (error) {
        t.true(error instanceof HttpError.NotFoundError);
    }
});
