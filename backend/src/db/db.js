import mongoose from "mongoose";
import "../utils/loadEnv.js"
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1"]);

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            dbName: "user"
        });
        console.log(`db is connected `);

    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

dbConnection();



export default dbConnection;