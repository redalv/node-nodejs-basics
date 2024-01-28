import fsPromises from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        if (await checkFileExists(newFilePath)) {
            throw new Error;
        } else {
            await fsPromises.rename(filePath, newFilePath);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

const checkFileExists = async (filePath) => {
    try {
        await fsPromises.access(filePath);
        return true;
    } catch {
        return false;
    }
}

await rename();