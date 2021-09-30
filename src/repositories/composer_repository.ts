import { SQLRepository } from 'rey-common';
import { Composer } from '../entity/models/composer';

export type ComposerRepository = SQLRepository<Composer>;

export default ComposerRepository;
