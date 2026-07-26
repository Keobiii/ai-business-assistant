import { getLowStockProducts } from "./inventory.tool";
import { getDashboardData } from "./dashboard.tool";
import { getCustomerCount, getTopCustomers } from "./customer.tool";
import { getSalesSummary } from "./sales.tool";
import { getProductCount, getProductList } from "./product.tool";


export const tools = {

    inventory_low_stock: {
        name:
            "inventory_low_stock",

        description:
            "Get products that are below minimum stock level",

        execute:
            getLowStockProducts
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

    customer_top: {
        name:
            "customer_top",

        description:
            "Get customers with the highest purchase amount",
            
        execute: 
            getTopCustomers
    },

    sales_summary: {
        name:
            "sales_summary",

        description: 
            "Get total sales and order information",
        
        execute: 
            getSalesSummary
    },

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
    }

};