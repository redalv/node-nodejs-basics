import { pipeline, Transform } from "stream";

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        const inputString = chunk.toString().trim();
        callback(null, inputString.split("").reverse().join("") + "\n");
    },
});

const transform = async () => {
    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        (error) => console.error(error)
    )
};

await transform();