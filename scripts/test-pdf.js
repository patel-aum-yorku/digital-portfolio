import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import fs from 'fs';
import path from 'path';

async function run() {
  const resumePath = path.join(process.cwd(), 'Profile', 'resume.pdf');
  const loader = new PDFLoader(resumePath);
  const docs = await loader.load();
  console.log(docs[0].pageContent.substring(0, 100));
}
run();
