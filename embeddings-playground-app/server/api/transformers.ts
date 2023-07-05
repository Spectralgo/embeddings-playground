import { pipeline, env } from "@xenova/transformers";

// Specify a custom location for models (defaults to '/models/').
env.localModelPath = 'C:/code/spectralgo/playground/embeddings-models/';

// Disable the loading of remote models from the Hugging Face Hub:
env.allowRemoteModels = false;

export default defineEventHandler(async (event) => {
    const generateEmbeddings = await pipeline(
        "feature-extraction",
        "Xenova/e5-large-v2"
    );

    function dotProduct(a: number[], b: number[]) {
        if (a.length !== b.length) {
            throw new Error("Both arguments must have the same length");
        }

        let result = 0;

        for (let i = 0; i < a.length; i++) {
            result += a[i] * b[i];
        }

        return result;
    }

    const input_1 = "The blue car is arriving from your right";
    // const input_2 = "From your point of view, your right";
    const input_2 = "La voiture bleue arrive sur ta droite";

    const output1 = await generateEmbeddings(input_1, {
        pooling: "mean",
        normalize: true,
    });
    const output2 = await generateEmbeddings(input_2, {
        pooling: "mean",
        normalize: true,
    });

    const result = {
        inputs: [input_1, input_2],
        similarity: 0,
    };

    result.similarity = dotProduct(output1.data, output2.data);

    return { result };
});
