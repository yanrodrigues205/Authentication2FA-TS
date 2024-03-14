import 'reflect-metadata';
import { Any, DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const database = new DataSource({
    "type": "mysql",
    "host": process.env.DATABASE_HOST,
    "port": Number(process.env.DATABASE_PORT),
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_NAME,
    "entities": ["src/entities/*.ts"],
    "migrations": ["src/migrations/*.ts"],
    "synchronize": true,
    "logging": false
});


export default database;