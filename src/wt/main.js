import {Worker} from "node:worker_threads";
import {cpus} from "os";
import path from 'path';


const performCalculations = async () => {
    const workerPath = path.resolve('.\\worker.js');
    const promises = [];

    for (let i = 0; i < cpus().length; i++) {
        promises.push(new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: i + 10
            });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        }));
    }
    Promise.all(promises).then((values) => console.log(values));
}

await performCalculations();