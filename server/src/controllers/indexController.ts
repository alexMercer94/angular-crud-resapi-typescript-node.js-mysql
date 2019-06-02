import { Request, Response } from 'express';

class IndexController {
    public index(req: Request, res: Response) {
        res.send('Hello');
    }
}

const indexController = new IndexController();
export default indexController;
