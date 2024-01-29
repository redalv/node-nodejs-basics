const parseArgs = () => {
    const args = process.argv.slice(2);
    const argsObject = {};

    for (let i = 0; i < args.length; i += 2) {
        argsObject[args[i].slice(2)] = args[i + 1];
    }

    console.log(Object.keys(argsObject).map((argName) => `${argName} is ${argsObject[argName]}`).join(', '));
};

parseArgs();