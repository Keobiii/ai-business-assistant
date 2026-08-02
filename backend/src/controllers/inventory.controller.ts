import { Request, Response } from "express";
import { getCategories, createCategory, updateCategory, deleteCategory } from "../services/inventory.service";

export async function getCategoriesController(
    req: Request,
    res: Response
) {
    try {
        const categories = await getCategories();

        res.json({
            success: true,
            data: categories
        })
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching categories."
        })
    }
}

export async function createCategoryController(
    req: Request,
    res: Response
) {
    

    try {
        const { name } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: "Category name is required."
            });
        }

        const result = await createCategory(name.trim());

        if (!result.success) {
            return res.status(409).json({
                success: false,
                message: result.message
            });
        }

        res.json(result);

    } catch (error) {
        console.error("Error creating category:", error);

        res.status(500).json({
            success: false,
            message: "An error occurred while creating the category."
        });
    }
}

export async function updateCategoryController(
    req: Request,
    res: Response
) {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: "Category name is required."
            });
        } 

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({
                success: false,
                message: "Valid category ID is required."
            });
        }

        const result = await updateCategory(Number(id), name.trim());

        if (!result.success) {
            return res.status(404).json({
                success: false,
                message: result.message
            });
        }

        res.json(result);
        
    } catch (error) {
        console.error("Error updating category:", error);

        res.status(500).json({
            success: false,
            message: "An error occurred while updating the category."
        });
    }
}

export async function deleteCategoryController(
    req: Request,
    res: Response
) {
    try {
        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({
                success: false,
                message: "Valid category ID is required."
            });
        }

        const result = await deleteCategory(Number(id));

        if (!result.success) {
            return res.status(404).json({
                success: false,
                message: result.message
            });
        }

        return res.json(result);

    } catch (error) {
        console.error("Error deleting category:", error);

        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the category."
        });
    }
}