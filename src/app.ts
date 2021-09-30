import { App as BaseApp, SQLContext } from 'rey-common';

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
        
    }
}

export default App;
