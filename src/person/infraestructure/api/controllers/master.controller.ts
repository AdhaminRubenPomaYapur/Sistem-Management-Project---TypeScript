import { Request, Response } from "express";
import { ServiceMaster } from "../../../application/service/master.service";
import { MasterCrud } from "../interface/crud/master.crud";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";


export class MasterController implements MasterCrud {
    constructor(private readonly serviceMaster: ServiceMaster) {}

    public POST = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { body } = req;
        const master = await this.serviceMaster.postEntity(body);
        res.json({master})
    }
}

