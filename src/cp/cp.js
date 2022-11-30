import child_process from "child_process";
import path from 'path';


const spawnChildProcess = async (args) => {
    const modulePath = path.resolve('src\\cp\\files\\script.js');
    child_process.fork(modulePath, args);
};

spawnChildProcess();