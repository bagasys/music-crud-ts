import { App as BaseApp, SQLContext } from 'rey-common';
import ComposerRepositoryImpl from './repositories/impl/composer_repository_impl';
import ComposerServiceImpl from './services/impl/composer_service_impl';
import ComposerController from './controllers/composer_controller';
import MusicRepositoryImpl from './repositories/impl/music_repository_impl';
import MusicServiceImpl from './services/impl/music_service_impl';
import MusicController from './controllers/music_controller';

class App extends BaseApp {
    
    public constructor(port: number) {
        super(port, false, true);
    }

    public async initProviders(): Promise<void> {
        SQLContext.initialize({
            connection_string: String(process.env.DB_CONNECTION_STRING),
            models_path: './database/models'
        });
    }

    public async initControllers(): Promise<void> {
        const composerService = new ComposerServiceImpl(new ComposerRepositoryImpl);
        const musicService = new MusicServiceImpl(new MusicRepositoryImpl);


        this.addController(new ComposerController(composerService));
        this.addController(new MusicController(musicService));
    }
}

export default App;
