import fsPromises from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    try {
        await fsPromises.cp(path.join(__dirname, '/files/'), path.join(__dirname, '/files_copy/'), { force: false, errorOnExist: true, recursive: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
