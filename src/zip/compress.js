import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from "zlib";
import { pipeline } from "stream";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const readStream = fs.createReadStream(path.join(__dirname, "files", "fileToCompress.txt"));
    const gzipStream = zlib.createGzip();
    const gzipWriteStream = fs.createWriteStream(path.join(__dirname, "files", "archive.gz"));

    pipeline(
        readStream,
        gzipStream,
        gzipWriteStream,
        (error) => { if (error) console.error(error) }
    )
};

await compress();