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
                products.product_code,
                products.name,
                products.description,
                categories.name AS category,
                products.price
            FROM products
            LEFT JOIN categories
                ON products.category_id = categories.id
            LIMIT 20
        `
    );

    return rows;
}

export async function getProductDetails(
    productCode: string
) {
    const [rows] = await database.query(
        `
            SELECT
                products.product_code,
                products.name,
                products.description,
                categories.name AS category,
                products.price
            FROM products
            LEFT JOIN categories
                ON products.category_id = categories.id
            WHERE products.product_code = ?
            LIMIT 1
        `,
        [productCode]
    );

    return rows;
}