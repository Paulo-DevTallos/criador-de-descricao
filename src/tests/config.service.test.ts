import { ConfigService } from "../shared/services/env-config/config.service";

const makeSut = (enviroment: string) => {
    const env = enviroment;
    const sut = ConfigService.getInstance(env);
    return sut;
}

describe('env config testing', () => {
    const sut: ConfigService = makeSut('test');

    it('should test if ConfigService is defined', () => {
        expect(sut).toBeDefined();
    });

    it('should test if a enviroment param is string', () => {
        expect(typeof sut['environment']).toBe('string');
    });

    it('should test match value is a string value', () => {
        expect(sut['environment']).toMatch('test');
    });

    it('should test if ConfigService getInstance', () => {
        const instance = ConfigService.getInstance('test');
        expect(instance).toBeInstanceOf(ConfigService);
    });

    it('should test if getAppPort is calleble using getInstance', () => {
        const instance = ConfigService.getInstance('test');
        expect(instance.getAppPort()).toBe(3036);
    });

    it('should test match value for NODE_ENV', () => {
        const instance = ConfigService.getInstance('test');
        expect(instance.getNodeEnv()).toBe('test');
    });
});
