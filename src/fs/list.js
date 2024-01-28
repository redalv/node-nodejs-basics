import fsPromises from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    try {
        const fileNames = await fsPromises.readdir(path.join(__dirname, '/files'));
        console.log(fileNames);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();