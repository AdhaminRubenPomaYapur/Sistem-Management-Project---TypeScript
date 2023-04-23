import { Request, Response } from "express";
import { PersonCase } from "../../application/person.case";

export class PersonController {
    constructor(private readonly personCase: PersonCase) {}

    public getPersonById = async (req: Request, res: Response) => {
        const uuid = req.params.uuid;
        const person = await this.personCase.findPersonById(`${uuid}`);
        res.json({person});
    }

    public createPerson = async (req: Request, res: Response) => {
        const {body} = req;
        const person = await this.personCase.registerPerson(body);
        res.json({person})
    }

    public listPersons = async (req: Request, res: Response) => {
        const persons = await this.personCase.listPersons();
        res.json({persons})
    }

    public updatedPersons = async (req: Request, res: Response) => {
        const uuid = req.params.uuid;
        const {body} = req;
        const person = await this.personCase.updatedPerson(`${uuid}`, body);
        res.json({person})
    }

    public deletePerson = async (req: Request, res: Response) => {
        const uuid = req.params.uuid;
        const person = await this.personCase.deletePerson(`${uuid}`);
        res.json({person})
    }
}