import {HfInference} from "@huggingface/inference";

export default defineEventHandler(async (event) => {

  const HF_ACCESS_TOKEN: string | undefined = process.env.HF_ACCESS_TOKEN;
  const hfInference = new HfInference(HF_ACCESS_TOKEN);
  
  function dotProduct(a: number[], b: number[]) {
    if (a.length !== b.length) {
      throw new Error('Both arguments must have the same length');
    }

    let result = 0;

    for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i];
    }

    return result;
  }

  const input_1=  'That is a happy person'
  const input_2=  'Je ne suis pas ici'

  const output1 = await hfInference.featureExtraction({
    model: 'sentence-transformers/all-MiniLM-L6-v2',
    inputs: input_1,
  });

  const output2 = await hfInference.featureExtraction({
    model: 'sentence-transformers/all-MiniLM-L6-v2',
    inputs: input_2,
  });

  const res = {
    inputs: [input_1,input_2],
    similarity:0
  }
  
  if (is1DArray(output1) && is1DArray(output2)) {
    res.similarity = dotProduct(output1, output2);

  }

  function is1DArray<T>(value: (T | T[] | T[][])[]): value is T[] {
    return !Array.isArray(value[0]);
  }

  return res
})