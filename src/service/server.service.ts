import express from 'express';
import cors from 'cors';
import dbInitMongo from '../config/mongodb';

import { masterRoute } from '../person/infraestructure/api/routes/master.route';
import { personRoute } from '../person/infraestructure/api/routes/person.route';
import { clientRoute } from '../person/infraestructure/api/routes/client.route';
import { supplierRoute } from '../person/infraestructure/api/routes/supplier.route';

export class Server {

    private port: number;
    private app;
    private paths;

    constructor() {
        this.app  = express();
        this.port = Number( process.env.PORT ) || 3001;

        this.paths = {
            masters   : '/api/masters',
            persons   : '/api/persons',
            clients   : '/api/clients',
            supplier  : '/api/suppliers',
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
        this.app.use(this.paths.masters,  masterRoute);
        this.app.use(this.paths.persons,  personRoute);
        this.app.use(this.paths.clients,  clientRoute);
        this.app.use(this.paths.supplier, supplierRoute)
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Server running for http://localhost:${this.port}`))
    }
}

