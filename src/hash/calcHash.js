import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    let fileContent = '';

    readStream.on('data', (data) => { 
        fileContent += data.toString(); 
    });

    readStream.on('end', () => { 
        console.log(createHash('sha256').update(fileContent).digest('hex'));
    });
};

await calculateHash();