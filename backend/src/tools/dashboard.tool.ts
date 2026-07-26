import database from "../config/database";

export async function getDashboardData() {
    const [rows] = await database.query(
        `
            SELECT
                (SELECT COUNT(*) FROM products) AS total_products,
                (SELECT COUNT(*) FROM customers) AS total_customers,
                (SELECT COUNT(*) FROM sales_orders) AS total_orders,
                (SELECT SUM(total_amount) FROM sales_order AS total_sales )
        `
    );

    return rows;
}