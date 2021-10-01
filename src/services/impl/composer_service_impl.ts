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
}

export default ComposerServiceImpl;
