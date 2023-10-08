import * as dotenv from "dotenv";
import { EnvConfig } from "./config.interface";
import { join } from "node:path";

export class ConfigService implements EnvConfig {
    constructor(public environment: string) {
        dotenv.config({ path: join(__dirname, `../../../.env.${this.environment}`) })
    }

    getAppPort(): number {
        return Number(process.env.PORT);
    }
    getNodeEnv(): string {
        return process.env.NODE_ENV || 'NODE_ENV';
    }
}