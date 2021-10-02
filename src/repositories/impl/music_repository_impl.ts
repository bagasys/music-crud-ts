import { SQLRepository } from "rey-common";
import { Music } from "src/entity/models/music";
import MusicRepository from "../music_repository";

export class MusicRepositoryImpl extends SQLRepository<Music> implements MusicRepository {
    constructor() {
        super('Music');
    }
}

export default MusicRepositoryImpl;
