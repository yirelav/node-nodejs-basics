import fs from 'node:fs/promises';
import Path from "path";
import {access, constants} from "node:fs/promises";


const rename = async () => {
    let srcPath = Path.resolve('.\\files\\wrongFilename.txt');
    let destPath = Path.resolve('.\\files\\properFilename.md');

    try {
        await access(destPath, constants.F_OK);
        console.error('FS operation failed');
        return;
    } catch (e) {
        //ignored
    }

    try {
        await fs.rename(srcPath, destPath);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await rename();