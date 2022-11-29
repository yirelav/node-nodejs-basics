import {Transform} from "stream";
import {pipeline} from "stream/promises";


const transform = async () => {
    await pipeline(process.stdin, reverseTransform, process.stdout)
};

const reverseTransform = new Transform({
    transform: (chunk, encoding, done) => {
        const newLineSymbol = '\n'; // for pretty output
        const result = chunk.reverse().toString().trim() + newLineSymbol;
        done(null, result)
    }
})

await transform();