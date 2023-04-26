import { Request, Response } from "express";
import { ServicePerson } from "../../../application/service/person.service";
import { PersonCrud } from "../interface/crud/person.crud";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export class PersonController implements PersonCrud {

    constructor(private readonly servicePerson: ServicePerson) {}

    public GET = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const persons = await this.servicePerson.getListEntity();
        res.json({persons});
    }
    public GETBYID = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const person = await this.servicePerson.getEntityById(uid);
        res.json({person});
    }
    public PUT = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const { body } = req;
        const person = await this.servicePerson.putEntity(uid, body);
        res.json({person});
    }
    public DELETE = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const person = await this.servicePerson.deleteEntity(uid);
        res.json({person});
    }
}
