# Nuxt project to compare embeddings models (open & close source) 

## Introduction
Text embeddings are crucial for many downstream NLP applications as they are vector representations of text that encode semantic information.

The quality of text embeddings is highly dependent on the embedding model used.

### OpenAI vs. free & open source
This repo is based on the Youtube video [$0 Embeddings (OpenAI vs. free & open source)](https://www.youtube.com/watch?v=QdDoFfkVkcw) 
[Github](https://github.com/rabbit-hole-syndrome/open-source-embeddings/tree/main/apps): 

### Project setup:
App Framework:
- [Nuxt 3](https://nuxt.com/)
> npx nuxi@latest init my-app

Embedding library:
- [huggingface.js](https://huggingface.co/docs/huggingface.js/index)
> npm install @huggingface/inference

Embedding models
- [e5-small-v2](https://huggingface.co/intfloat/e5-small-v2)
- [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)

Vector DB:
- [Postgres](https://github.com/pgvector/pgvector)
or/and
- [Milvus](https://milvus.io/)

### Embeddings 101:
- [Vector databases are so hot right now. WTF are they?](https://www.youtube.com/watch?v=klTvEwg3oJ4)


### Server-side Embeddings:
- [Api route in Nuxt](https://nuxt.com/docs/guide/directory-structure/server)
- [Fetch in client](https://nuxt.com/docs/api/composables/use-fetch#usefetch)

### Ai/Embeddings Ressources:
- [SBERT](https://sbert.net/) 
- [Hugging Face](https://huggingface.co/models)

## The world of open source embedding models
How to use them, and how they compare to OpenAI's text-embedding-ada-002.

## Sentence Transformers Models

### Use cases
- Semantic search:
Use a query to look for semantic similarity

- Semantic textual similarity:
Use a query to look for textual (e.g length) similarity

>Note:
>You can train a model to your needs
>
>- Multilingual vs monolingual
>- Multi-modal (e.g text and image)
>- Translation (Bitext Mining, train to find semantic similarity between to sentences of two different languages)
>- Multi-QA (e.g. Yahoo answers, bing search and results)


### MTEB
The MTEB (Massive Text Embedding Benchmark) aims to measure the performance of text embedding models on diverse embedding tasks.

#### Leaderboard
- [MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard) 

### Tasks and Evaluation by MTEB
- **Bitext Mining**
    - Inputs: Two sets of sentences from different languages
    - Task: Find the best match (commonly translations) in the second set for each sentence in the first set

- **Classification**
    - Inputs: A train and a test set
    - Task: Embed the sets using the model, use the train set embeddings to train a kNN classifier, and score it on the test set

- **Clustering**
    - Inputs: A set of sentences or paragraphs
    - Task: Group the inputs into meaningful clusters using a k-means model

- **Pair Classification**
    - Inputs: A pair of text inputs
    - Task: Assign a label to the pair (typically binary variables denoting duplicate or paraphrase pairs)

- **Reranking**
    - Inputs: A query and a list of relevant and irrelevant reference texts
    - Task: Rank the references according to their relevance to the query

- **Retrieval**
    - Inputs: A corpus, queries, and a mapping for each query to relevant documents from the corpus
    - Task: Find the relevant documents for each query

- **Semantic Textual Similarity (STS)**
    - Inputs: A pair of sentences
    - Task: Determine the similarity between the sentences

- **Summarization**
    - Inputs: Machine-generated summaries
    - Task: Score each machine-generated summary based on the closest score to all human summary embeddings

#### Key Points:
- MTEB is a benchmark that measures the performance of text embedding models across different tasks.

- MTEB encompasses 56 datasets across 8 tasks and currently summarizes over 2000 results on the leaderboard.

- Sequence Length = Token length. Try the [Tokenizer](https://platform.openai.com/tokenizer)


#### Normalized vectors of length 1:
Think about a vector like an arrow pointing in a certain direction. This arrow can be big (long) or small (short). Now, a normalized vector is like a very special arrow, one that is exactly 1 unit long.

When we normalize a vector, it's like we're adjusting the size of our arrow, making it longer or shorter, until it's exactly 1 unit long. 

We do this by dividing each part of the arrow by its total length. This way, we get an arrow (a vector) that points in the same direction as our original one, but its length is exactly 1 unit. This is what we call a "normalized" vector.

This is like resizing a picture. You can make it bigger or smaller, but it's still the same picture.


6. MTEB
7. Inference API
8. Transformers.js
9. Embeddings in the Browser
10. The Future of Embeddings

## Other videos on the subject
- [Llama Index 101 with Vector DBs and GPT 3.5](https://www.youtube.com/watch?v=WKvAWub8VCU)

- [Fixing LLM Hallucinations with Retrieval Augmentation in LangChain #6](https://www.youtube.com/watch?v=kvdVduIJsc8&list=PLIUOU7oqGTLieV9uTIFMm6_4PXg-hlN6F&index=7)

The source code for the project is available on GitHub.


