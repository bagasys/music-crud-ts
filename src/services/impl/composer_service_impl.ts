import { Service, HttpError } from 'rey-common';
import { ComposerRepository } from '../../repositories/composer_repository';
import { ComposerService } from '../composer_service';
import { Composer } from '../../entity/models/composer';

export class ComposerServiceImpl extends Service implements ComposerService {
    
    constructor(
        private composerRepository: ComposerRepository
    ) {
        super();
    }

    public async getComposerById(id: number): Promise<Composer> {
        const composer = await this.composerRepository.findOne({ id });
        if (!composer) {
            throw new HttpError.NotFoundError('composer not found', 'COMPOSER_NOT_FOUND');
        }
        return composer;
    }

    public async getAllComposers(): Promise<Composer[]> {
        return this.composerRepository.findAll({}, {});
    }

    public async createComposer(data: Partial<Composer>): Promise<Composer> {
        return await this.composerRepository.create(data);
    }

    public async updateComposer(id: number, composerData: Partial<Composer>): Promise<Partial<Composer>> {
        const composer = await this.composerRepository.findById(id);
        if (!composer) {
            throw new HttpError.NotFoundError('composer not found', 'COMPOSER_NOT_FOUND');
        }
        await this.composerRepository.update({ id }, composerData);
        return { id };
    }

    public async deleteComposer(id: number): Promise<boolean> {
        const composer = await this.composerRepository.findById(id);
        if (!composer) {
            throw new HttpError.NotFoundError('composer not found', 'COMPOSER_NOT_FOUND');
        }
        const affectedRows = await this.composerRepository.delete({id});
        return affectedRows == 1;
    }
}

export default ComposerServiceImpl;
