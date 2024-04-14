export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  USERS_WHITELIST: process.env.USERS_WHITELIST?.split(" ") ?? [],
  GOCARDLESS_SECRET_ID: process.env.GOCARDLESS_SECRET_ID,
  GOCARDLESS_SECRET_KEY: process.env.GOCARDLESS_SECRET_KEY,
};
