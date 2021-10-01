import { Service } from 'rey-common';
import { Composer } from '../entity/models/composer';

export interface ComposerService extends Service {
    getComposerById(id: number): Promise<Composer>;
    getAllComposers(): Promise<Composer[]>;
}

export default ComposerService;
