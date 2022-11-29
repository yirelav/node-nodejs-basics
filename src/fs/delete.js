import {rm} from "node:fs/promises";
import path from 'path';

const remove = async () => {
    let src = path.resolve('.\\files\\fileToRemove.txt');
    try {
        await rm(src);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await remove();