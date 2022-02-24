"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DataController_1 = __importDefault(require("../controllers/DataController"));
const routes = (0, express_1.Router)();
routes.get('/uploadData', DataController_1.default.writeFiles);
routes.get('/getData', DataController_1.default.readData);
exports.default = routes;
