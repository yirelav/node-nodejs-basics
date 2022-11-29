import {readFile} from 'node:fs/promises';
import path from 'path';

const read = async () => {
    let srcPath = path.resolve('.\\files\\fileToRead.txt');
    try {
        await readFile(srcPath, 'utf8').then(data => console.log(data));
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read();