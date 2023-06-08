import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = "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"
const configuration = new Configuration({
  apiKey: openaiApiKey,
})
export const openai = new OpenAIApi(configuration)