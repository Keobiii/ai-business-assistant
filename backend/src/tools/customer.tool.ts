import database from "../config/database";

export async function getTopCustomers() {
    const [rows] = await database.query(
        `
            SELECT 
                customer_code,
                cutomer_name,
                SUM(total_amount) AS total_purchase
            FROM sales_orders
            GROUP BY
                customer_code,
                customer_name
            ORDER BY
                total_purchase DESC
            LIMIT 10
        `
    );

    return rows;
}

export async function getCustomerCount() {
    const [rows] = await database.query(
        `
            SELECT
                COUNT(*) AS total_customers
            FROM customers
        `
    );

    return rows;
}