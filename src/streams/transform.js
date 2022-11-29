import {Transform} from "stream";


const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

const reverseTransform = new Transform({
    transform: (chunk, encoding, done) => {
        const newLineSymbol = "\n"; // for pretty output
        const result = chunk.reverse().toString().trim() + newLineSymbol;
        done(null, result)
    }
})

await transform();