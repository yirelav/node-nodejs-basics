import { env } from 'node:process';


const parseEnv = () => {
    console.log(Object.entries(env)
        .filter(entry => entry[0].startsWith('RSS_'))
        .map(entry => `${entry[0]}=${entry[1]}`)
        .join('; '));
};

parseEnv();