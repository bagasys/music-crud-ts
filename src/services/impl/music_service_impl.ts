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
}

export default MusicServiceImpl;