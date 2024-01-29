import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    let fileContent = '';

    readableStream.on('data', (data) => { 
        fileContent += data.toString(); 
    });

    readableStream.on('end', () => { 
        console.log(createHash('sha256').update(fileContent).digest('hex'));
    });
};

await calculateHash();