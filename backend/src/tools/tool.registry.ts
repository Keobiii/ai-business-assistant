import { getInventoryList, getLowStockProducts } from "./inventory.tool";
import { getDashboardData } from "./dashboard.tool";
import { getCustomerCount, getCustomerDetails, getCustomerList, getTopCustomers } from "./customer.tool";
import { getSalesOrderDetails, getSalesOrders, getSalesSummary } from "./sales.tool";
import { getProductCount, getProductList, getProductDetails } from "./product.tool";


export const tools = {

    inventory_low_stock: {
        name:
            "inventory_low_stock",

        description:
            "Get products that are below minimum stock level",

        execute:
            getLowStockProducts
    },

    inventory_list: {
        name:
            "inventory_list",

        description:
            "Get inventory information including product code, name, quantity, and minimum stock level",

        execute:
            getInventoryList
    },

    dashboard_summary: {
        name:
            "dashboard_summary",

        description:
            "Get overall business summary",

        execute:
            getDashboardData
    },

    customer_count: {
        name:
            "customer_count",

        description:
            "Get total number of customers",

        execute:
            getCustomerCount
    },

    customer_list: {
        name:
            "customer_list",

        description:
            "Get customer information",

        execute:
            getCustomerList
    },

    customer_top: {
        name:
            "customer_top",

        description:
            "Get customers with the highest purchase amount",

        execute:
            getTopCustomers
    },

    customer_details: {
        name:
            "customer_details",

        description:
            "Get detailed information about a specific customer including customer code, name, email, phone, and address",

        execute:
            getCustomerDetails
    },

    sales_summary: {
        name:
            "sales_summary",

        description:
            "Get total sales and order information",

        execute:
            getSalesSummary
    },

    sales_orders: {
        name:
            "sales_orders",

        description:
            "Get sales order information including order number, customer code, customer name, total amount, and order date",

        execute:
            getSalesOrders
    },

    sales_order_details: {
        name:
            "sales_order_details",

        description:
            "Get detailed information about a specific sales order including order number, customer code, customer name, customer email, customer phone, customer address, total amount, and order date",

        execute:
            getSalesOrderDetails
    },

    // Product related tools
    product_count: {
        name:
            "product_count",

        description:
            "Get total number of products",

        execute:
            getProductCount
    },

    product_list: {
        name:
            "product_list",

        description:
            "Get product information",

        execute:
            getProductList
    },

    product_details: {

        name:
            "product_details",

        description:
            "Get detailed information about a specific product including product code, name, description, brand, category, and price",

        execute:
            getProductDetails
    }

};