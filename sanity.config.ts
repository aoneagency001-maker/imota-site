import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./sanity/schemas/post";

export default defineConfig({
  name: "imota",
  title: "Imota CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: {
    types: [post]
  }
});
