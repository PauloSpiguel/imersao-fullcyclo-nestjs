import { Service } from '../shared/core/Service';
interface Request {
}
interface Response {
    uuid: string;
}
declare class CreateUniqueID implements Service<Request, Response> {
    constructor();
    execute(): Response;
}
export { CreateUniqueID };
