import { Request, Response } from "express";
import { ServiceClient } from "../../../application/service/client.service";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ClientCrud } from "../interface/crud/client.crud";

export class ClientController implements ClientCrud {
    constructor( private readonly serviceClient: ServiceClient) {}

    public GET = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const persons = await this.serviceClient.getListEntity();
        res.json({persons});
    }
    public GETBYID = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const person = await this.serviceClient.getEntityById(uid);
        res.json({person});
    }
    public PUT = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const { body } = req;
        const person = await this.serviceClient.putEntity(uid, body);
        res.json({person})
    }
    public DELETE = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const person = await this.serviceClient.deleteEntity(uid);
        res.json({person})
    }
}