import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import fs from 'fs';
import path from 'path';

async function buildIndex() {
  console.log("Starting FAISS index build process...");

  const resumePath = path.join(process.cwd(), 'Profile', 'resume.pdf');
  const linkedinPath = path.join(process.cwd(), 'Profile', 'linkedin_profile.pdf');
  const outputDir = path.join(process.cwd(), 'api', 'faiss_index');

  const docs = [];

  const addPdfToDocs = async (pdfPath, sourceName) => {
    if (fs.existsSync(pdfPath)) {
      console.log(`Loading ${sourceName}...`);
      const loader = new PDFLoader(pdfPath);
      const loadedDocs = await loader.load();
      // Add source metadata
      loadedDocs.forEach(d => d.metadata = { ...d.metadata, source: sourceName });
      docs.push(...loadedDocs);
    } else {
      console.warn(`Could not find ${sourceName} at ${pdfPath}`);
    }
  };

  await addPdfToDocs(resumePath, 'Resume');
  await addPdfToDocs(linkedinPath, 'LinkedIn Profile');

  if (docs.length === 0) {
    console.error("No documents found to index.");
    process.exit(1);
  }

  console.log("Splitting documents into chunks...");
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splitDocs = await textSplitter.splitDocuments(docs);
  console.log(`Created ${splitDocs.length} chunks. Generating embeddings...`);

  // We use Xenova's all-MiniLM-L6-v2 directly in Node.js
  const embeddings = new HuggingFaceTransformersEmbeddings({
    modelName: "Xenova/all-MiniLM-L6-v2",
  });

  // Create FAISS store
  console.log("Creating FAISS store... (this may take a minute)");
  const vectorStore = await FaissStore.fromDocuments(splitDocs, embeddings);

  // create output dir if not exist
  if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Saving FAISS index to ${outputDir}...`);
  await vectorStore.save(outputDir);

  console.log("✅ Successfully built and saved FAISS index!");
}

buildIndex().catch(console.error);
