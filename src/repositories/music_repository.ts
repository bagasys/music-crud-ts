import { SQLRepository } from 'rey-common';
import { Music } from 'src/entity/models/music';

export interface MusicRepository extends SQLRepository<Music> {
    findAllWithItem(): Promise<any>
    findByIdWithItem(id: number): Promise<any>;
}

export default MusicRepository;
