"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const express_1 = require("express");
const testRouter = (0, express_1.Router)();
exports.testRouter = testRouter;
testRouter.get("", (req, res) => {
    res.json({ response: "Si funciona para convertir otros archivos" });
});
