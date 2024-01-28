import fsPromises from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {
        const fileContent = await fsPromises.readFile(path.join(__dirname, '/files/fileToRead.txt'), { encoding: 'utf8' });
        console.log(fileContent);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();