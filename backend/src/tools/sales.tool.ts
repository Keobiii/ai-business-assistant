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

export async function getSalesOrders() {
    const [rows] = await database.query(
        `
            SELECT
                sales_orders.order_number,
                sales_orders.customer_id,
                customers.name,
                sales_orders.total_amount,
                sales_orders.order_date
            FROM sales_orders
            LEFT JOIN customers
                ON sales_orders.customer_id = customers.id
            ORDER BY sales_orders.order_date DESC
            LIMIT 20
        `
    );

    return rows;
}

export async function getSalesOrderDetails(
    orderNumber: string
) {
    const [rows] = await database.query(
        `
            SELECT
                sales_orders.order_number,
                sales_orders.customer_id,
                customers.name,
                customers.email,
                customers.phone,
                customers.address,
                sales_orders.total_amount,
                sales_orders.order_date
            FROM sales_orders
            LEFT JOIN customers
                ON sales_orders.customer_id = customers.id
            WHERE sales_orders.order_number = ?
            LIMIT 1
        `,
        [orderNumber]
    );

    return rows;
}