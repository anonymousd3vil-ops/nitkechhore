import { Router } from "express";
import {contactUs,  getQueries } from "../controllers/contactController.js";

const contactRouter = Router();

contactRouter.post('/contactus', contactUs)
contactRouter.get('/getQueries', getQueries)

export default contactRouter;