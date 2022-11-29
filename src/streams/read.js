import path from 'path';
import {pipeline} from "stream/promises";
import {readFile} from "fs/promises";

const read = async () => {
    const srcPath = path.resolve('.\\files\\fileToRead.txt');
    const readStream = readFile(srcPath, 'utf-8');
    await pipeline(readStream, process.stdout);
};

await read();