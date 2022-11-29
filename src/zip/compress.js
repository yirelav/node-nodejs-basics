import fs from "fs";
import zlib from "zlib";
import path from 'path';

const compress = async () => {

    let srcPath = path.resolve('.\\files\\fileToCompress.txt');
    let dstPath = path.resolve('.\\files\\archive.gz');

    const input = fs.createReadStream(srcPath, 'utf-8');
    const output = fs.createWriteStream(dstPath);
    const gzCompressor = zlib.createGzip();

    input.pipe(gzCompressor).pipe(output);
};

await compress();