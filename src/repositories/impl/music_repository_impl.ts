import { SQLRepository } from "rey-common";
import { Music } from "src/entity/models/music";
import MusicRepository from "../music_repository";

export class MusicRepositoryImpl extends SQLRepository<Music> implements MusicRepository {
    constructor() {
        super('Music');
    }

    public async findAllWithItem(): Promise<any> {
        const db = this.getInstance();
        const res = await db.model[this.modelName].findAll({
            include: 'Composer'
        });
        return res;
    }

    public async findByIdWithItem(id: number): Promise<any> {
        const db = this.getInstance();
        const res = await db.model[this.modelName].findOne({
            where: { id },
            include: 'Composer'
        });
        return res;
    }
}

export default MusicRepositoryImpl;
