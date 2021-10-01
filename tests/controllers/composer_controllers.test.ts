import test from 'ava';
import * as sinon from 'sinon';
import ComposerService from "../../src/services/impl/composer_service_impl";
import ComposerRepository from "../../src/repositories/impl/composer_repository_impl";
import ComposerController from "../../src/controllers/composer_controller";
import { RequestData, Context } from 'rey-common'
import { Composer } from '../../src/entity/models/composer';

test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always('Restore Sandbox and Configuration After Each Test', (t: any): void => {
    t.context.sandbox.restore();
});

test.serial('SUCCESS, getComposerById case composer found', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const composerController = new ComposerController(composerService);
    
    const composer = {
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const expected = {
        data: composer
    };

    const mockService = t.context.sandbox.mock(composerService).expects('getComposerById').resolves(composer);
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
    
    await composerController.getComposerById(data, context)
        .then(response => {
            t.true(mockService.called);
            t.deepEqual(response, expected);
        });
});

test.serial('SUCCESS, getAllComposers case composer found', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const composerController = new ComposerController(composerService);
    
    const composers = [{
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    }];

    const expected = {
        data: composers
    };

    const mockService = t.context.sandbox.mock(composerService).expects('getAllComposers').resolves(composers);
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
    
    await composerController.getAllComposers(data, context)
        .then(response => {
            t.true(mockService.called);
            t.deepEqual(response, expected);
        });
});

test.serial('SUCCESS, createComposer', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const composerController = new ComposerController(composerService);
    
    const composer = {
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const expected = {
        data: composer
    };

    const mockService = t.context.sandbox.mock(composerService).expects('createComposer').resolves(composer);
    const data: RequestData = {
        query: {},
        params: {},
        body: {
            name: "bagas"
        },
        files: {}
    };

    const context: Context = {
        request_id: "1",
        user_id: 1,
        email: "bagas@go-jek.com",
        name: "bagasys",
        phone_number: "081259591600"
    };
    
    await composerController.createComposer(data, context)
        .then(response => {
            t.true(mockService.called);
            t.deepEqual(response, expected);
        });
});

test.serial('SUCCESS, updateComposer', async (t: any): Promise<void> => {
    const composerRepository = new ComposerRepository;
    const composerService = new ComposerService(composerRepository);
    const composerController = new ComposerController(composerService);
    
    const composer = {
        id: 1,
        name: 'bagas',
        created_at: '',
        updated_at: '',
        deleted_at: ''
    };

    const expected = {
        data: composer
    };

    const mockService = t.context.sandbox.mock(composerService).expects('updateComposer').resolves(composer);
    const data: RequestData = {
        query: {},
        params: {id: 1},
        body: {
            name: "bagas"
        },
        files: {}
    };

    const context: Context = {
        request_id: "1",
        user_id: 1,
        email: "bagas@go-jek.com",
        name: "bagasys",
        phone_number: "081259591600"
    };
    
    await composerController.updateComposer(data, context)
        .then(response => {
            t.true(mockService.called);
            t.deepEqual(response, expected);
        });
});
