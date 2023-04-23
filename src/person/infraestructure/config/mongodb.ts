import { connect } from "mongoose";

const DB_URI: string = `${process.env.DB_URI}`;

const dbInitMongo = async () => {
    try {
        await connect(DB_URI);
        console.log(`Connection successful to MongoDB`)
    } catch (error) {
        console.log(`Error - ${(error as Error).message}`)
    }
}

export default dbInitMongo;