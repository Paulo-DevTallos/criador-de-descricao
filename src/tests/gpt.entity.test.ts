import { GptEntity, GptProps } from "../gpt/domain/entities/gpt.entity";

describe('test GPT entity', () => {
    it('should test if gpt entity is defined', () => {
        const gptEntity = new GptEntity({title: 'bola', description: 'alguma descrição para bola'});
        expect(gptEntity).toBeDefined();
    });
});
