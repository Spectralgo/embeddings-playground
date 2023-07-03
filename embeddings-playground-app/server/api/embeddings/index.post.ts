import {HfInference} from "@huggingface/inference";

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    
    const HF_ACCESS_TOKEN: string | undefined = process.env.HF_ACCESS_TOKEN;
    const hfInference = new HfInference(HF_ACCESS_TOKEN);
    
    const output = await hfInference.featureExtraction({
        model: "intfloat/e5-small-v2",
        inputs: "That is a happy person",
    });
    
    return {
        response: output
    }
})


// Error example:
// if (!Number.isInteger(id)) {
//   throw createError({
//     statusCode: 400,
//     statusMessage: 'ID should be an integer',
//   })
// }