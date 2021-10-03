import { Controller as BaseController, RequestData, Context } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import MusicService from 'src/services/music_service';
import { Music } from 'src/entity/models/music';
import { SCHEME } from '../entity/validation/music';

export default class MusicController extends BaseController {
    
    public constructor(
        private musicService: MusicService
    ) {
        super({ path: API_ROUTE.MUSIC });
    }

    public async getAllMusics(data: RequestData, context: Context): Promise<any> {
        const musics = await this.musicService.getAllMusics();
        return {
            data: musics
        };
    }

    public async getMusicById(data: RequestData, context: Context): Promise<any> {
        const music = await this.musicService.getMusicById(data.params.id);
        return {
            data: music
        };
    }

    public async createMusic(data: RequestData, context: Context): Promise<any> {
        const musicData: Partial<Music> = {title: data.body.title as string, composer_id: data.body.composer_id};
        const music = await this.musicService.createMusic(musicData);
        return {
            data: music
        };
    }

    public async updateMusic(data: RequestData, context: Context): Promise<any> {
        const musicData: Partial<Music> = {title: data.body.title as string, composer_id: data.body.composer_id};
        const id: number = data.params.id;
        const music = await this.musicService.updateMusic(id, musicData);
        return {
            data: music
        };
    }

    public async deleteMusic(data: RequestData, context: Context): Promise<any> {
        const id: number = data.params.id;
        await this.musicService.deleteMusic(id);
        return {
            data: {
                id: id
            }
        }        
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAllMusics.bind(this));
        this.addRoute('post', '/', this.createMusic.bind(this), {validate: SCHEME.CREATE_MUSIC});
        this.addRoute('get', '/:id', this.getMusicById.bind(this));
        this.addRoute('put', '/:id', this.updateMusic.bind(this), {validate: SCHEME.UPDATE_MUSIC});
        this.addRoute('delete', '/:id', this.deleteMusic.bind(this));
    }
}
