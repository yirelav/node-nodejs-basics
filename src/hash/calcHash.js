import path from 'path';
import {createReadStream} from 'node:fs';

const {createHash} = await import('crypto');

const calculateHash = async () => {
    let srcPath = path.resolve('.\\files\\fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const input = createReadStream(srcPath);
    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(hash.digest('hex'));
        }
    });
};

await calculateHash();