import express from 'express';
import cors from 'cors';
import { routerPerson } from '../person/infraestructure/routes/person';
import dbInitMongo from '../config/mongodb';

export class Server {

    private port: number;
    private app;
    private paths;

    constructor() {
        this.app  = express();
        this.port = Number( process.env.PORT ) || 3001;

        this.paths = {
            persons   : '/api/persons',
            clients   : '/api/clients',
            employees : '/api/employees',
        }

        this.connectionDBMongo();
        this.middlewares();
        this.routes();

    }

    async connectionDBMongo(): Promise<void> {
        await dbInitMongo();
    }

    middlewares(): void {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes (): void {
        this.app.use(this.paths.persons, routerPerson);
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Server running for http://localhost:${this.port}`))
    }
}

