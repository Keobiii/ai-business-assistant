import database from "../config/database";

export async function categoryExists(id: number) {
    const [rows] = await database.query(
        `
            SELECT id
            FROM categories
            WHERE id = ?
        `,
        [id]
    );

    return (rows as any[]).length > 0;
}

export async function categoryNameExists(name: string, excludeId?: number) {
    let query = `
        SELECT id
        FROM categories
        WHERE name = ?
    `;

    const params: any[] = [name.trim()];

    if (excludeId !== undefined) {
        query += " AND id != ?";
        params.push(excludeId);
    }

    query += " LIMIT 1";

    const [rows] = await database.query(query, params);

    return (rows as any[]).length > 0;  
}

export async function getCategories() {
    const [rows] = await database.query(
        `
            SELECT 
                id,
                name,
                created_at
            FROM categories
            ORDER BY name ASC
        `
    );

    return rows;
}

export async function createCategory(
    name: string
) {
    const exists = await categoryNameExists(name);
    
    if (exists) {
        return {
            success: false,
            message: "Category name already exists",
            data: null
        };
    }

    const [result] = await database.query(
        `
            INSERT INTO categories (name)
            VALUES (?)
        `,
        [name]
    );

    return {
        success: true,
        message: "Category created successfully",
        data: result
    };
}

export async function updateCategory(
    id: number,
    name: string
) {

    const exists =
        await categoryExists(id);


    if (!exists) {

        return {
            success: false,
            message: "Category not found",
            data: null
        };

    }

    const nameExists =
        await categoryNameExists(name, id);

    if (nameExists) {

        return {
            success: false,
            message: "Category name already exists",
            data: null
        };

    }


    const [result] =
        await database.query(
            `
                UPDATE categories
                SET name = ?
                WHERE id = ?
            `,
            [
                name,
                id
            ]
        );


    return {
        success: true,
        message: "Category updated successfully",
        data: result
    };
}

export async function deleteCategory(
    id: number
) {
    const exist = await categoryExists(id);

    if (!exist) {
        return {
            success: false,
            message: "Category not found."
        };
    }

    const [result] = await database.query(
        `
            DELETE FROM categories
            WHERE id = ?
        `,
        [id]
    );

    return {
        success: true,
        message: "Category deleted successfully",
        data: result
    };
}