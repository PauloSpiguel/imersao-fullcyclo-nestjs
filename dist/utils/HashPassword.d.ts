import { Service } from '../shared/core/Service';
interface Request {
    password: string;
}
interface Response {
    hashed_password: string;
}
declare class HashPassword implements Service<Request, Response> {
    constructor();
    execute({ password }: Request): Promise<Response>;
}
export { HashPassword };
