import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

async function buildContext() {
  console.log("Starting to extract context from PDFs...");

  const resumePath = path.join(process.cwd(), 'Profile', 'resume.pdf');
  const linkedinPath = path.join(process.cwd(), 'Profile', 'linkedin_profile.pdf');
  const outputFilePath = path.join(process.cwd(), 'api', 'context.json');

  let combinedText = "";

  const extractPdfText = async (pdfPath, sourceName) => {
    if (fs.existsSync(pdfPath)) {
      console.log(`Loading ${sourceName}...`);
      const dataBuffer = fs.readFileSync(pdfPath);
      const data = await pdfParse(dataBuffer);
      combinedText += `\n\n--- Source: ${sourceName} ---\n\n`;
      // Clean up excess whitespace/newlines to save tokens
      const text = data.text.replace(/\n\s*\n/g, '\n').trim();
      combinedText += text;
    } else {
      console.warn(`Could not find ${sourceName} at ${pdfPath}`);
    }
  };

  await extractPdfText(resumePath, 'Resume');
  await extractPdfText(linkedinPath, 'LinkedIn Profile');

  if (!combinedText) {
    console.error("No context found to save.");
    process.exit(1);
  }

  // Create api dir if not exist
  const apiDir = path.dirname(outputFilePath);
  if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
  }

  fs.writeFileSync(outputFilePath, JSON.stringify({ context: combinedText }), 'utf8');

  console.log(`✅ Successfully extracted context to ${outputFilePath}!`);
}

buildContext().catch(console.error);
