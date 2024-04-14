export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  USERS_WHITELIST: process.env.USERS_WHITELIST?.split(" ") ?? [],
};
