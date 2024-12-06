import { Router } from "express";
const router = Router();

import mocksController from "../controllers/mocks.controller.js";


//Endpoint para obtener mascotas simuladas
router.get("/mockingpets", mocksController.getMockingPets);
router.get("/mockingusers", mocksController.getMockingUsers);
router.post("/generatedata", mocksController.generateData);
router.get("/generatedata/users", mocksController.getMockedUsers);
router.get("/generatedata/pets", mocksController.getMockedUsers)


export default router;