import { Configuration, OpenAIApi, type ChatCompletionRequestMessage } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const jergaPrompt = await request.json();
	const message = jergaPrompt.message as string | undefined;

	if (
		!OPENAI_API_KEY ||
		!message ||
		message.replaceAll(' ', '').length === 0 ||
		message.length > 500
	) {
		throw new Error('something went wrong...');
	}

	const configuration = new Configuration({
		organization: 'org-gOEoqsuPmlxIZL2yEbGkqTxo',
		apiKey: OPENAI_API_KEY
	});
	const openai = new OpenAIApi(configuration);
	const prompt = {
		content:
			'Your job with the following text is to: 1.) identify what latino country it comes from, based mostly on the slang. 2.) provide a translation into basic latino spanish 3.) briefly describe the slang words that were used, if any. 4.) output this in one concise paragraph written in elegant spanish. Here is the text: "' +
			message +
			'"',
		role: 'user'
	} as ChatCompletionRequestMessage;
    
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [prompt]
	});
	const aiResponse = response.data.choices[0].message?.content;
	return new Response(aiResponse, { headers: { 'content-type': 'text/event-stream' } });
}
