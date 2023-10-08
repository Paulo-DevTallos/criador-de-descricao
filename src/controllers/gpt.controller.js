const { Configuration, OpenAIApi } = require('openai');

exports.createDescriptions = async (req, res) => {
    const { description } = req.body;

    //if (!description) res.status(422).json(['Item sem descrição'])

    const config = new Configuration({
        apiKey: process.env.USER_GPT_KEY,
        organization: process.env.ORGANZATION_KEY,
    })

    const openaiInstance = new OpenAIApi(config);

    try {
        const prompt = `Gere uma descrição eficiente, totalmente SEO-friendly para o produto: ${description}.`
        const completion = await openaiInstance.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 2049,
            temperature: 0.7
        })

        const response = completion.data.choices[0].text.trim();

        res.status(201).json({ description, response })
    } catch (error) {
        const responseError = {
            status: error.response.status,
            data: error.response.data,
            message: error.response.message
        }

        res.status(400).json({ responseError })
    }
}