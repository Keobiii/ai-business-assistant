import type { Category } from "../types/inventory";

const API_URL =
    "http://localhost:5050/api/inventory";


export async function getCategories(): Promise<Category[]> {

    const response =
        await fetch(
            `${API_URL}/categories`
        );

    if (!response.ok) {
        throw new Error(
            "Failed to fetch categories"
        );
    }

    const result =
        await response.json();

    return result.data;
}


export async function createCategory(
    name: string
) {

    const response =
        await fetch(
            `${API_URL}/categories`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    name
                })
            }
        );


    const result =
        await response.json();


    if (!response.ok) {

        throw new Error(
            result.message ||
            "Failed to create category"
        );

    }


    return result;
}


export async function updateCategory(
    id: number,
    name: string
) {

    const response =
        await fetch(
            `${API_URL}/categories/${id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    name
                })
            }
        );


    const result =
        await response.json();


    if (!response.ok) {

        throw new Error(
            result.message ||
            "Failed to update category"
        );

    }


    return result;
}


export async function deleteCategory(
    id: number
) {

    const response =
        await fetch(
            `${API_URL}/categories/${id}`,
            {
                method: "DELETE"
            }
        );


    const result =
        await response.json();


    if (!response.ok) {

        throw new Error(
            result.message ||
            "Failed to delete category"
        );

    }


    return result;
}