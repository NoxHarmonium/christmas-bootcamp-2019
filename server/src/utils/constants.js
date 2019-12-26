import { cleanEnv, str, num } from "envalid";

const { DB_PASSWORD, DB_HOST, DB_NAME, PORT } = cleanEnv(process.env, {
  DB_PASSWORD: str(),
  DB_HOST: str(),
  DB_NAME: str({ default: "bootcamp" }),
  PORT: num({ default: 3001 })
});

export { DB_PASSWORD, DB_HOST, DB_NAME, PORT };
