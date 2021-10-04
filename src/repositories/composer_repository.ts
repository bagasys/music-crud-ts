import { SQLRepository } from 'rey-common';
import { Composer } from '../entity/models/composer';

export interface ComposerRepository extends SQLRepository<Composer> {
    findAllWithItem(): Promise<any>
    findByIdWithItem(id: number): Promise<any>;
}

export default ComposerRepository;
