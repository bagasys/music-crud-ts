import { Service, HttpError } from 'rey-common';
import MusicRepository from 'src/repositories/music_repository';
import MusicService from '../music_service';
import { Music } from 'src/entity/models/music';

export class MusicServiceImpl extends Service implements MusicService {

    constructor(
        private musicRepository: MusicRepository
    ) {
        super();
    }

    public async getMusicById(id: number): Promise<Music> {
        const music = await this.musicRepository.findById(id);
        if (!music) {
            throw new HttpError.NotFoundError('music not found', 'MUSIC_NOT_FOUND');
        }
        return music;
    }

    public async getAllMusics(): Promise<Music[]> {
        return this.musicRepository.findAll({}, {});
    }

    public async createMusic(data: Partial<Music>): Promise<Music> {
        return await this.musicRepository.create(data);
    }

    public async updateMusic(id: number, musicData: Partial<Music>): Promise<Partial<Music>> {
        const music = await this.musicRepository.findById(id);
        if (!music) {
            throw new HttpError.NotFoundError('music not found', 'MUSIC_NOT_FOUND');
        }
        await this.musicRepository.update({id}, musicData);
        return {id};
    }

    public async deleteMusic(id: number): Promise<boolean> {
        const composer = await this.musicRepository.findById(id);
        if (!composer) {
            throw new HttpError.NotFoundError('composer not found', 'COMPOSER_NOT_FOUND');
        }
        const affectedRows = await this.musicRepository.delete({id});
        return affectedRows == 1;
    }
}

export default MusicServiceImpl;
