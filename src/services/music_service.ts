import { Service } from 'rey-common';
import { Music } from 'src/entity/models/music';
export interface MusicService extends Service {
    getMusicById(id: number): Promise<Music>;
    getAllMusics(): Promise<Music[]>;
    createMusic(data: Partial<Music>): Promise<Music>;
    updateMusic(id: number, musicData: Partial<Music>): Promise<Partial<Music>>;
    deleteMusic(id: number): Promise<boolean>;
}

export default MusicService;