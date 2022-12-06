import { Request, Response, Router } from "express";

const testRouter = Router();

testRouter.get("", (req: Request, res: Response) => {
  res.json({ response: "Si funciona para convertir otros archivos" });
});

export { testRouter };
