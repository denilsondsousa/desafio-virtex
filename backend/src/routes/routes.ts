import { Router } from 'express';

import DataController from '../controllers/DataController';

const routes = Router();

routes.get('/uploadData', DataController.writeFiles);
routes.get('/getData', DataController.readData);

export default routes;
