import database from "../config/database";

export async function getProductCount() {
    const [rows] = await database.query(
        `
            SELECT
                COUNT(*) AS total_products
            FROM products
        `
    );

    return rows;
}

export async function getProductList() {
    const [rows] = await database.query(
        `
            SELECT
                product_code,
                name,
                category,
                price
            FROM products
            LIMIT 20
        `
    );

    return rows;
}