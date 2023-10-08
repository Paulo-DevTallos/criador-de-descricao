import express, { Application } from 'express';
import { ConfigService } from './services/env-config/config.service';

export class App {
    public app: Application;
    public envConfig: ConfigService;

    constructor() {
        this.app = express();
        this.envConfig = new ConfigService('development');
        this.initializeMiddlewares();
    };

    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    };

    start() {
        const port = this.envConfig.getAppPort();
        this.app.listen(port, () => {
            console.log(`server running on port http://localhost:${port}`);
        });
    };
}