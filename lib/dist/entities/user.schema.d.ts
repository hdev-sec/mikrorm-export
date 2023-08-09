import { EntitySchema } from "@mikro-orm/core";
export interface IUserSchema {
    id: string;
    timeLogin: Date;
    timeLastOnline: Date;
    expirationTime: Date;
    timePwdUpdate: Date;
    email: string;
    orange: string;
    username: string;
    lange: string;
    adminNote: string;
    adminLang: string;
    oldSha1: number;
    active: boolean;
    changed: boolean;
}
declare const userSchema: EntitySchema<IUserSchema, never>;
export default userSchema;
