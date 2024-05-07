import pg from "pg";
import {HOST, PASSWORD, USER, DATABASES, PORT_DB} from "../config.js"

const { Pool } = pg;

export const DB = () => {
  try {
    return new Pool({
      host: HOST,
      port: PORT_DB,
      database: DATABASES,
      user: USER,
      password: PASSWORD,
    });
  } catch (e) {
    console.log(e);
    console.log("DB connect error");
  }
};

export default DB;
