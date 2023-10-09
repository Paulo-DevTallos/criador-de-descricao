import { ConfigService } from "../shared/services/env-config/config.service";

describe('env config testing', () => {
    let sut: ConfigService;
    const enviroment = 'development';
    sut = new ConfigService(enviroment);

    it('should test if ConfigService is defined', () => {
        expect(sut).toBeDefined();
    });

    it('should test if a enviroment param is string', () => {
        expect(typeof sut['environment']).toBe('string');
    });

    it('should test match value is a string value', () => {
        expect(sut['environment']).toMatch('development');
    });

    it('should test if ConfigService getInstance', () => {
        const instance = ConfigService.getInstance(enviroment);
        expect(instance).toBeInstanceOf(ConfigService);
    });
});
