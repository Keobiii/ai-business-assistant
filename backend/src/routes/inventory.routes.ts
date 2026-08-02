import { getCategoriesController, createCategoryController, updateCategoryController, deleteCategoryController } from "../controllers/inventory.controller";
import express from "express";

const router = 
    express.Router();

router.get("/categories", getCategoriesController);
router.post("/categories", createCategoryController);
router.put("/categories/:id", updateCategoryController);
router.delete("/categories/:id", deleteCategoryController);

export default router;