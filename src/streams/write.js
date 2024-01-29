import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'))

    process.stdin.pipe(writeStream);
};

await write();