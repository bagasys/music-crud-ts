import { Controller as BaseController, SQLContext, RequestData, JWTMiddleware, Context } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import ComposerService from 'src/services/composer_service';
import { SCHEME } from '../entity/validation/composer';
import { Composer } from 'src/entity/models/composer';
export default class ComposerController extends BaseController {
    
    public constructor(
        private composerService: ComposerService
    ) {
        super({ path: API_ROUTE.COMPOSER });
    }

    public async getComposerById(data: RequestData, context: Context): Promise<any> {
        const composer = await this.composerService.getComposerById(data.params.id);
        return {
            data: composer
        };
    }

    public async getAllComposers(data: RequestData, context: Context): Promise<any> {
        const composers = await this.composerService.getAllComposers();
        return {
            data: composers
        };
    }

    public async createComposer(data: RequestData, context: Context): Promise<any> {
        const composerData: Partial<Composer> = {name: data.body.name as string};
        const composer = await this.composerService.createComposer(composerData);
        return {
            data: composer
        };
    }

    public async updateComposer(data: RequestData, context: Context): Promise<any> {
        const composerData: Partial<Composer> = {name: data.body.name as string};
        const id: number = data.params.id;
        const composer = await this.composerService.updateComposer(id, composerData);
        return {
            data: composer
        };
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAllComposers.bind(this));
        this.addRoute('post', '/', this.createComposer.bind(this), {validate: SCHEME.CREATE_COMPOSER});
        this.addRoute('get', '/:id', this.getComposerById.bind(this));
        this.addRoute('put', '/:id', this.updateComposer.bind(this), {validate: SCHEME.UPDATE_COMPOSER});
    }
}
