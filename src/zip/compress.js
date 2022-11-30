import fs from "fs";
import zlib from "zlib";
import path from 'path';

const compress = async () => {

    let srcPath = path.resolve('src\\zip\\files\\fileToCompress.txt');
    let dstPath = path.resolve('src\\zip\\files\\archive.gz');

    const input = fs.createReadStream(srcPath, 'utf-8');
    const output = fs.createWriteStream(dstPath);
    const gzCompressor = zlib.createGzip();

    input.pipe(gzCompressor).pipe(output);
};

await compress();