import 'reflect-metadata';
import { DataSource } from 'typeorm';

const database = new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "teste14.03",
    "entities": ["src/entities/*.ts"],
    "migrations": ["src/migrations/*.ts"],
    "synchronize": true,
    "logging": false
});


export default database;