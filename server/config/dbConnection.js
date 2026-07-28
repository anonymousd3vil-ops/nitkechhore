/* eslint-disable no-undef */

import dns from 'dns';
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/";

const connetToDb = async () => {
    mongoose
        .connect(MONGODB_URI, {dbName: 'NITKeChhore-DB'})
        .then((conn) => {
            console.log(`Database is Connected:  ${conn.connection.host} `);
        })
        .catch((err) => {
            console.log("There is error in connecting Database: ", err.message);
            process.exit(1);
        });
}

export default connetToDb;