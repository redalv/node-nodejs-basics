const parseEnv = () => {
    const rssEnvVariablesNames = Object.keys(process.env).filter(envVariable => envVariable.startsWith('RSS_'));

    const rssEnvVariablesValues = rssEnvVariablesNames.map((rssEnvVarName) => `${rssEnvVarName}=${process.env[rssEnvVarName]}`).join('; ');

    console.log(rssEnvVariablesValues);
};

parseEnv();