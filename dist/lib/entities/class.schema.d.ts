import { EntitySchema } from "@mikro-orm/core";
export declare class TestClass {
    id: string;
    email: string;
    orange?: string;
    constructor(email: string, password?: string);
}
declare const testSchema: EntitySchema<TestClass, never>;
export default testSchema;
