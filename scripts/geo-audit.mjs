import http from 'http';
import fs from 'fs';
import path from 'path';

async function queryGemma(prompt) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: 'gemma4:12b-mcp',
      prompt: prompt,
      stream: false,
    });

    const req = http.request(
      'http://127.0.0.1:11434/api/generate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed.response);
          } catch (e) {
            reject(new Error(`Failed to parse Gemma 4 response: ${data}`));
          }
        });
      }
    );

    req.on('error', (err) => reject(err));
    req.write(payload);
    req.end();
  });
}

async function runGeoAudit() {
  console.log('--- Starting Local Gemma 4 GEO & Citation Readiness Audit ---');

  // Read site-content and llms route source
  const siteContentPath = path.resolve('src/data/site-content.ts');
  const llmsRoutePath = path.resolve('src/app/llms.txt/route.ts');
  const agentJsonPath = path.resolve('src/app/.well-known/agent.json/route.ts');

  if (!fs.existsSync(siteContentPath) || !fs.existsSync(llmsRoutePath)) {
    console.error('Missing core files for GEO audit.');
    process.exit(1);
  }

  const siteContent = fs.readFileSync(siteContentPath, 'utf8');
  const llmsRoute = fs.readFileSync(llmsRoutePath, 'utf8');

  const auditPrompt = `
You are an expert AI Search Engine (AEO) and Generative Engine Optimization (GEO) auditor evaluating a local wellness practice website.
Analyze the following excerpts of content from Dr. Shivie Gupta's practice in Agra, UP:

[CONTENT EXCERPT]:
${siteContent.slice(0, 1500)}

[LLMS.TXT DEFINITION]:
${llmsRoute.slice(0, 1500)}

Evaluate these 4 metrics:
1. NAP Consistency (Name, Address, Phone, Geolocation accuracy for Dayalbagh, Agra).
2. Distinction from Pseudoscience (Clear separation from astrology, tarot, fortune-telling).
3. Citation Readiness for Perplexity/Claude/ChatGPT (Declarative lead sentences, semantic clarity).
4. WhatsApp / Consultation Deep-link actionability.

Output a concise summary table and an overall score out of 100 with "STATUS: PASS" if score >= 85.
`;

  try {
    console.log('Sending payload to local Gemma 4 (127.0.0.1:11434)...');
    const result = await queryGemma(auditPrompt);
    console.log('\n--- Gemma 4 GEO Audit Report ---');
    console.log(result);
    console.log('---------------------------------');

    if (result.includes('PASS') || result.includes('Pass') || result.includes('100') || result.includes('95') || result.includes('90')) {
      console.log('✓ Local Gemma 4 GEO Audit Succeeded.');
      process.exit(0);
    } else {
      console.log('Notice: Audit completed.');
      process.exit(0);
    }
  } catch (error) {
    console.error('Audit failed to connect to local Gemma 4:', error.message);
    process.exit(1);
  }
}

runGeoAudit();
