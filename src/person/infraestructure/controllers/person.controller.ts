import { Request, Response } from "express";
import { ServicePerson } from "../../application/service/person.service";

export class PersonController {
    constructor(private readonly servicePerson: ServicePerson) {}

    public getPersonById = async (req: Request, res: Response) => {
        const uuid = req.params.uuid;
        const person = await this.servicePerson.getEntityById(`${uuid}`);
        res.json({person});
    }

    public createPerson = async (req: Request, res: Response) => {
        const {body} = req;
        const person = await this.servicePerson.postEntity(body);
        res.json({person})
    }

    public listPersons = async (req: Request, res: Response) => {
        const persons = await this.servicePerson.getListEntity();
        res.json({persons})
    }

    public updatedPersons = async (req: Request, res: Response) => {
        const uuid = req.params.uuid;
        const {body} = req;
        const person = await this.servicePerson.putEntity(`${uuid}`, body);
        res.json({person})
    }

    public deletePerson = async (req: Request, res: Response) => {
        const uuid = req.params.uuid;
        const person = await this.servicePerson.deleteEntity(`${uuid}`);
        res.json({person})
    }
}