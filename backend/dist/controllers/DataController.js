"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Data_1 = __importDefault(require("../models/Data"));
const OntInfo_Huawei_json_1 = __importDefault(require("../static/OntInfo-Huawei.json"));
const OntInfo_ZTE_SNs_json_1 = __importDefault(require("../static/OntInfo-ZTE-SNs.json"));
class DataController {
    writeFiles(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataRepository = (0, typeorm_1.getRepository)(Data_1.default);
                OntInfo_Huawei_json_1.default.map((info) => __awaiter(this, void 0, void 0, function* () {
                    const data = dataRepository.create(info);
                    yield dataRepository.save(data);
                }));
                OntInfo_ZTE_SNs_json_1.default.map((info) => __awaiter(this, void 0, void 0, function* () {
                    const data = dataRepository.create(info);
                    yield dataRepository.save(data);
                }));
                return response.status(200).json({ ok: 'success in operation!' });
            }
            catch (err) {
                return response
                    .status(500)
                    .json({ error: err instanceof Error ? err.message : 'Error!' });
            }
        });
    }
    readData(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataRepository = (0, typeorm_1.getRepository)(Data_1.default);
                const data = yield dataRepository.find();
                return response.status(200).json(data);
            }
            catch (err) {
                return response
                    .status(500)
                    .json({ error: err instanceof Error ? err.message : 'Error!' });
            }
        });
    }
}
exports.default = new DataController();
