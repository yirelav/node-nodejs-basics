import path from "path";
import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
    let srcPath = path.resolve('.\\files\\archive.gz');
    let dstPath = path.resolve('.\\files\\fileToCompress.txt');

    const input = fs.createReadStream(srcPath);
    const output = fs.createWriteStream(dstPath);
    const gzDecompressor = zlib.createGunzip();

    input.pipe(gzDecompressor).pipe(output);
};

await decompress();