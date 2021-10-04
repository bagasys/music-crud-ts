import { SQLRepository } from 'rey-common';
import { Composer } from '../../entity/models/composer';
import { ComposerRepository } from '../composer_repository';

export class ComposerRepositoryImpl extends SQLRepository<Composer> implements ComposerRepository {
    constructor() {
        super('Composer');
    }

    public async findAllWithItem(): Promise<any> {
        const db = this.getInstance();
        const res = await db.model[this.modelName].findAll({
            include: 'Music'
        });
        return res;
    }

    public async findByIdWithItem(id: number): Promise<any> {
        const db = this.getInstance();
        const res = await db.model[this.modelName].findOne({
            where: { id },
            include: 'Music'
        });
        return res;
    }
}

export default ComposerRepositoryImpl;
