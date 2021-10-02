import { SQLRepository } from 'rey-common';
import { Music } from 'src/entity/models/music';

export type MusicRepository = SQLRepository<Music>;

export default MusicRepository;
