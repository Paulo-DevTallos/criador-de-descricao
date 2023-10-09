import * as dotenv from "dotenv";
import { EnvConfig } from "./config.interface";
import { join } from "node:path";

export class ConfigService implements EnvConfig {
    private static instance: ConfigService;

    constructor(private environment: string) {
        dotenv.config({ path: join(__dirname, `../../../../.env.${this.environment}`) })
    }

    public static getInstance(enviroment: string) { 
        if (!this.instance) this.instance = new ConfigService(enviroment);
        return this.instance;
    }

    getAppPort(): number {
        return Number(process.env.PORT);
    }
    getNodeEnv(): string {
        return process.env.NODE_ENV || this.environment;
    }
}