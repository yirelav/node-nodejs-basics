import {readdir} from 'node:fs/promises';
import path from 'path';

const list = async () => {
    let srcPath = path.resolve('.\\files');
    try {
        await readdir(srcPath).then(names => console.log(names));
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();