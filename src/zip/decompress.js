import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from "zlib";
import { pipeline } from "stream";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const gzipReadStream = fs.createReadStream(path.join(__dirname, "files", "archive.gz"));
    const unzipStream = zlib.createUnzip();
    const writeStream = fs.createWriteStream(path.join(__dirname, "files", "fileToCompress.txt"));

    pipeline(
        gzipReadStream,
        unzipStream,
        writeStream,
        (error) => { if (error) console.error(error) }
    )
};

await decompress();