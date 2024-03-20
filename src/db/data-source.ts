import 'reflect-metadata';
require("dotenv").config();
import { DataSource } from "typeorm";

const database = new DataSource({
    "type": "mysql",
    "host": process.env.DATABASE_HOST,
    "port": Number(process.env.DATABASE_PORT),
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_NAME,
    "entities": ['./src/entities/*.entity.{ts,js}'],
    "migrations": ["./src/migrations/*.{ts, js}"],
    "synchronize": true,
    "logging": false
});

export default database;


