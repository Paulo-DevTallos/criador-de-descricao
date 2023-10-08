import { ConfigService } from "../shared/services/env-config/config.service";

describe('env config testing', () => {
    let sut: ConfigService;
    const enviroment = 'development';
    sut = new ConfigService(enviroment);

    it('should test if ConfigService is defined', () => {
        expect(sut).toBeDefined();
    });

    it('should test if a enviroment param is string', () => {
        expect(typeof sut.environment).toBe('string');
    });
});
