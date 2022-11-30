import path from 'path';
import {createWriteStream} from "node:fs";

const write = async () => {
    const srcPath = path.resolve('src\\streams\\files\\fileToWrite.txt');
    const writeStream = createWriteStream(srcPath, 'utf-8');
    process.stdin.pipe(writeStream);
};

await write();