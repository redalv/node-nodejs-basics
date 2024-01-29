import fsPromises from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    try {
        await fsPromises.writeFile(path.join(__dirname, '/files/fresh.txt'), 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();