import { Router } from "express";
import contactUs from "../controllers/contactController.js";

const contactRouter = Router();

contactRouter.post('/contactus', contactUs)

export default contactRouter;