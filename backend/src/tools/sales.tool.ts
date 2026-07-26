import database from "../config/database";

export async function getSalesSummary() {
    const [rows] = await database.query(
        `
            SELECT
                COUNT(*) AS total_orders,
                SUM(total_amount) AS total_sales
            FROM sales_orders
        `
    );

    return rows;
}