import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));

    readableStream.pipe(process.stdout);
};

await read();