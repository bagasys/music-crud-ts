import { Service } from 'rey-common';
import { Composer } from '../entity/models/composer';

export interface ComposerService extends Service {
    getComposerById(id: number): Promise<Composer>;
    getAllComposers(): Promise<Composer[]>;
    createComposer(data: Partial<Composer>): Promise<Composer>;
    updateComposer(id: number, composerData: Partial<Composer>): Promise<Partial<Composer>>;
    deleteComposer(id: number): Promise<boolean>;
}

export default ComposerService;
