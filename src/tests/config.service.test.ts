import { ConfigService } from "../shared/services/env-config/config.service";

describe('env config testing', () => {
    let sut: ConfigService;
    const enviroment = 'test';
    sut = new ConfigService(enviroment);

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
        const instance = ConfigService.getInstance(enviroment);
        expect(instance).toBeInstanceOf(ConfigService);
    });

    it('should test if getAppPort is calleble using getInstance', () => {
        const instance = ConfigService.getInstance(enviroment);
        expect(instance.getAppPort()).toBe(3036);
    });

    it('should test match value for NODE_ENV', () => {
        const instance = ConfigService.getInstance(enviroment);
        expect(instance.getNodeEnv()).toBe('test');
    });

    it('should return NODE_ENV if is defined', () => {
        process.env.NODE_ENV = 'production'
        expect(sut.getNodeEnv()).toBe('production');
    });
});
