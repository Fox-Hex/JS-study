const dbSettingsEnv = {
  dev: { adapter: 'sqlite' },
  prod: { adapter: 'postgresql'}
}

const dbConfig = dbSettingsEnv['prod'] ?? { adapter: 'memory'}
console.log(dbConfig);

