console.log(
  'process.env.CLEAN_NEST_MONGO_CONNECTION_STRING',
  process.env.CLEAN_NEST_MONGO_CONNECTION_STRING,
);

export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString: process.env
    .CLEAN_NEST_MONGO_CONNECTION_STRING as string,
};
