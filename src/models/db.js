import pg from "pg";
import {HOST, PASSWORD, USER, DATABASES, PORT_DB} from "../config.js"

const { Pool } = pg;


export const DB = (connectionString) => {
  try {
    return new Pool({
      connectionString: `postgresql://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${DATABASES}`,
    });
  } catch (e) {
    console.log(e);
    console.log("DB connect error");
  }
};

const localConnection = `postgresql://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${DATABASES}`
DB(localConnection)

export default DB;
