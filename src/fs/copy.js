import {cp} from 'node:fs/promises';
import path from 'path';


const copy = async () => {
    let srcPath = path.resolve('.\\files');
    let destPath = path.resolve('.\\files_copy');

    try {
        await cp(srcPath, destPath, {force: false, errorOnExist: true, recursive: true})
    } catch (err) {
        console.error('FS operation failed')
    }
};

copy();