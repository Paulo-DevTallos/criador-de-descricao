require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: process.env.USER_GPT_KEY,
    organization: process.env.ORGANIZATION_KEY,
})

const openai = new OpenAIApi(config);

const generateDescription = async (nameProduct) => {
    const prompt = `Gerar uma descrição para o produto: ${nameProduct}`;

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048
        })

        return completion.data.choices[0].text.trim();
    } catch (error) {
        if (error.response) {
            console.log(error.response.status)
            console.log(error.response.data)
        } else {
            console.log(error.message)
        }
    }
}

// criar tratamento para mensagens de erro no frontend.
// criar acesso de usuário para salvar suas descrições.

(async () => {
    const nameProduct = "Oleos essenciais duTerra";
    const category = "Saúde"; // analisar possibilidade do valor vir por select (categoria ou segmento)
    const productDescription = await generateDescription(nameProduct); // gerar nova descrição
    console.log(`O nome do produto é: ${nameProduct}, categoiria: ${category}`)
    console.log(`A descrição do produto é: ${productDescription}`)
})();

