import {writeFile, access, constants} from 'node:fs/promises';
import path from 'path';


const create = async () => {

    let src = path.resolve('.\\files\\fresh.txt');

    try {
        await access(src, constants.F_OK);
        console.error('FS operation failed');
    } catch (err) {
        try {
            const data = 'I am fresh and young';
            await writeFile(src, data);
        } catch (err) {
            console.error('FS operation failed');
        }
    }
};

await create();