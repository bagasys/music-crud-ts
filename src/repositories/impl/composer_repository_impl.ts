import { SQLRepository } from 'rey-common';
import { Composer } from '../../entity/models/composer';
import { ComposerRepository } from '../composer_repository';

export class ComposerRepositoryImpl extends SQLRepository<Composer> implements ComposerRepository {
    constructor() {
        super('Composer');
    }
}

export default ComposerRepositoryImpl;
