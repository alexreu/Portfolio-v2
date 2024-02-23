import { createClient, type ClientConfig } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

const config: ClientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
};

const client = createClient(config);

export default client;
