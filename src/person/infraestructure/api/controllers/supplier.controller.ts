import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { SupplierCrud } from "../interface/crud/supplier.crud";
import { ServiceSupplier } from "../../../application/service/supplier.service";

export class SupplierController implements SupplierCrud {

    constructor(private readonly serviceSupplier: ServiceSupplier) {}

    public GET = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const suppliers = await this.serviceSupplier.getListEntity();
        res.json({suppliers});
    }
    public GETBYID = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const supplier = await this.serviceSupplier.getEntityById(uid);
        res.json({supplier});
    }
    public PUT = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const { body } = req;
        const supplier = await this.serviceSupplier.putEntity(uid, body);
        res.json({supplier})
    }
    public DELETE = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        const { uid } = req.params;
        const supplier = await this.serviceSupplier.deleteEntity(uid);
        res.json({supplier})
    }

}