import { Controller as BaseController, RequestData, Context } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import MusicService from 'src/services/music_service';

export default class MusicController extends BaseController {
    
    public constructor(
        private musicService: MusicService
    ) {
        super({ path: API_ROUTE.MUSIC });
    }

    public async getAllMusics(data: RequestData, context: Context): Promise<any> {
        const composers = await this.musicService.getAllMusics();
        return {
            data: composers
        };
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAllMusics.bind(this));
    }
}
