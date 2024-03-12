import express from 'express';
import * as dotenv from 'dotenv';
import { routes } from './routes';
import * as fs from 'fs'

export default class Server
{
    private port: number;
    private app: any;
    private message: string;

    constructor(port:number, message:string)
    {
        this.port = port;
        this.message = message;
        dotenv.config();
    }

    verifyPort()
    {
        if(fs.existsSync(".env"))
        {
            if(process.env.SERVER_PORT !== "")
            {
                this.port = Number(process.env.SERVER_PORT);
            }
        }
        else
        {
            throw new Error("Please, create a dotenv file to store secret keys!");
            return;
        }
    }

    async __init__()
    {
        this.verifyPort();
        this.app = express();
        this.app.use(routes);

        this.app.listen(this.port, () => {
            console.log(`Server listening on port => '${this.port}'`);
            console.log(this.message);
        });
    }
}