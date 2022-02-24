import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Data from '../models/Data';

import OntInfoHuawei from '../static/OntInfo-Huawei.json';
import OntInfoZTE from '../static/OntInfo-ZTE-SNs.json';

class DataController {
  async writeFiles(request: Request, response: Response) {
    try {
      const dataRepository = getRepository(Data);

      OntInfoHuawei.map(async (info) => {
        const data = dataRepository.create(info);
        await dataRepository.save(data);
      });

      OntInfoZTE.map(async (info) => {
        const data = dataRepository.create(info);
        await dataRepository.save(data);
      });

      return response.status(200).json({ ok: 'success in operation!' });
    } catch (err) {
      return response
        .status(500)
        .json({ error: err instanceof Error ? err.message : 'Error!' });
    }
  }

  async readData(request: Request, response: Response) {
    try {
      const dataRepository = getRepository(Data);

      const data = await dataRepository.find();
      return response.status(200).json(data);
    } catch (err) {
      return response
        .status(500)
        .json({ error: err instanceof Error ? err.message : 'Error!' });
    }
  }
}

export default new DataController();
