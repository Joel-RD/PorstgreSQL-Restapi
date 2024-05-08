import pg from "pg";
import {HOST, PASSWORD, USER, DATABASES, PORT_DB, cloudDB} from "../config.js"

const { Pool } = pg;


export const DB = () => {
  try {
    return new Pool({
      connectionString: cloudDB || `postgresql://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${DATABASES}` ,
    });
  } catch (e) {
    console.log(e);
    console.log("DB connect error");
  }
};



export default DB;
