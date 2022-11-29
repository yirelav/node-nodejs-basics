import path from 'path';
import {createReadStream} from "node:fs";

const read = async () => {
    const srcPath = path.resolve('.\\files\\fileToRead.txt');
    const readStream = createReadStream(srcPath, 'utf-8');
    readStream.on('data', chunk => {
        console.log(chunk);
    })
};

await read();