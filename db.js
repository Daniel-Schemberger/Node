import 'dotenv/config'
import postgres from 'postgres'

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID}  = process.env
const URL = `POSTGRES://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

export const sql = postgres(URL, {ssl: 'require'})

//export const sql = postgres({
  //host: PGHOST,
 // database: PGDATABASE,
 // username: PGUSER,
  //password: PGPASSWORD,
 // port: 3332,
 // ssl: 'require',
 // connection: {
  //  options: `project=${ENDPOINT_ID}`,
 // },
//});