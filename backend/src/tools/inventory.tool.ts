import database from "../config/database";

export async function getLowStockProducts() {
    const [rows] = await database.query(
        `
            SELECT 
                products.product_code,
                products.name,

                inventory.quantity,
                inventory.minimum_stock
            FROM inventory
            INNER JOIN products
                ON products.id = inventory.product_id
            WHERE inventory.quantity <= inventory.minimum_stock
        `
    );

    return rows;
}

export async function getInventoryList() {
    const [rows] = await database.query(
        `
            SELECT 
                products.product_code,
                products.name,

                inventory.quantity,
                inventory.minimum_stock
            FROM inventory
            INNER JOIN products
                ON products.id = inventory.product_id
            LIMIT 20
        `
    );

    return rows;
}