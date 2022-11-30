import {cp} from 'node:fs/promises';
import path from 'path';


const copy = async () => {
    let srcPath = path.resolve('src\\fs\\files');
    let destPath = path.resolve('src\\fs\\files_copy');

    try {
        await cp(srcPath, destPath, {force: false, errorOnExist: true, recursive: true})
    } catch (err) {
        console.error('FS operation failed')
    }
};

copy();