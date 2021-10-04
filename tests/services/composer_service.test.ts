import { HttpError } from 'rey-common';
import test from 'ava';
import * as sinon from 'sinon';
import ComposerService from "../../src/services/impl/composer_service_impl";
import ComposerRepository from "../../src/repositories/impl/composer_repository_impl";

test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always('Restore Sandbox and Configuration After Each Test', (t: any): void => {
    t.context.sandbox.restore();
});

test.serial('SUCCESS, getComposerById case composer found', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const composer = {
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('findByIdWithItem').resolves(composer);
    await composerService.getComposerById(1)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, composer);
        });
});

test.serial('FAIL, getComposerById case composer not found', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('findByIdWithItem').resolves(null);
    
    try {
        await composerService.getComposerById(1);
    } catch (error) {
        t.true(mockRepository.called);
        t.true(error instanceof HttpError.NotFoundError);
    }
});

test.serial('SUCCESS, getAllComposers', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const composer = {
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('findAllWithItem').resolves([composer]);
    await composerService.getAllComposers()
        .then(response => {
            t.true(mockRepository.called);
            t.deepEqual(response, [composer]);
        });
});

test.serial('SUCCESS, createComposer', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const composer = {
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('create').resolves(composer);
    await composerService.createComposer({name: "bagas"})
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, composer);
        });
});

test.serial('SUCCESS, updateComposer', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('update').resolves(data);
    const mockRepository2 = t.context.sandbox.mock(composerRepository).expects('findById').resolves({id: 1, name: "bagas"});
    await composerService.updateComposer(1, {name: "bagas"})
        .then(response => {
            t.true(mockRepository.called);
            t.deepEqual(response, data);
        });
});

test.serial('FAIL, updateComposer composer not found', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('update').resolves(data);
    const mockRepository2 = t.context.sandbox.mock(composerRepository).expects('findById').resolves(null);
    try {
        await composerService.updateComposer(1, {name: "bagas"});
    } catch (error) {
        t.true(mockRepository2.called);
        t.true(error instanceof HttpError.NotFoundError);
    }
});

test.serial('SUCCESS, deleteComposer', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('delete').resolves(1);
    const mockRepository2 = t.context.sandbox.mock(composerRepository).expects('findById').resolves({id: 1, name: "bagas"});
    await composerService.deleteComposer(1)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, true);
        });
});

test.serial('FAIL, deleteComposer case composer not found', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const data = {
        id: 1
    };

    const mockRepository = t.context.sandbox.mock(composerRepository).expects('delete').resolves(1);
    const mockRepository2 = t.context.sandbox.mock(composerRepository).expects('findById').resolves(null);
    
    try {
        await composerService.deleteComposer(1);
    } catch (error) {
        t.true(error instanceof HttpError.NotFoundError);
    }
});
