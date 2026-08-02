import { getLowStockProducts } from "../tools/inventory.tool";
import { tools } from "../tools/tool.registry";
import { askAI } from "./ai.service";
import { saveChatHistory } from "./chat-history.services";

type SelectedTool = {
    tool: any;
    params: any[];
};

function extractCode(
    message: string,
    prefix: string
): string | null {

    const regex =
        new RegExp(`${prefix}-\\d+`, "i");

    const match =
        message.match(regex);


    if (!match) {
        return null;
    }


    return match[0].toUpperCase();
}

function selectTool(
    message: string
): SelectedTool | null {

    const text =
        message.toLowerCase();


    // =====================================
    // INVENTORY LIST
    // =====================================

    if (
        text.includes("inventory list") ||
        text.includes("inventory information") ||
        text.includes("list of inventory")
    ) {

        return {
            tool:
                tools.inventory_list,

            params:
                []
        };

    }


    // =====================================
    // LOW STOCK / INVENTORY
    // =====================================

    if (
        text.includes("low stock") ||
        text.includes("stock") ||
        text.includes("restock") ||
        text.includes("reorder") ||
        text.includes("inventory")
    ) {

        return {
            tool:
                tools.inventory_low_stock,

            params:
                []
        };

    }


    // =====================================
    // BUSINESS
    // =====================================

    if (
        text.includes("business") ||
        text.includes("summary") ||
        text.includes("overview") ||
        text.includes("performance")
    ) {

        return {
            tool:
                tools.dashboard_summary,

            params:
                []
        };

    }


    // =====================================
    // TOP CUSTOMER
    // =====================================

    if (
        text.includes("top customer") ||
        text.includes("best customer") ||
        text.includes("highest customer")
    ) {

        return {
            tool:
                tools.customer_top,

            params:
                []
        };

    }


    // =====================================
    // CUSTOMER DETAILS
    // =====================================

    const customerCode =
        extractCode(message, "CUST");


    if (customerCode) {

        return {
            tool:
                tools.customer_details,

            params:
                [customerCode]
        };

    }


    // =====================================
    // CUSTOMER LIST
    // =====================================

    if (
        text.includes("customer list") ||
        text.includes("customer information") ||
        text.includes("list of customers")
    ) {

        return {
            tool:
                tools.customer_list,

            params:
                []
        };

    }


    // =====================================
    // CUSTOMER COUNT
    // =====================================

    if (
        text.includes("how many customers") ||
        text.includes("number of customers") ||
        text.includes("total customers") ||
        text.includes("customer count")
    ) {

        return {
            tool:
                tools.customer_count,

            params:
                []
        };

    }


    // =====================================
    // SALES ORDER DETAILS
    // =====================================

    const salesOrderNumber =
        extractCode(message, "SO");


    if (salesOrderNumber) {

        return {
            tool:
                tools.sales_order_details,

            params:
                [salesOrderNumber]
        };

    }


    // =====================================
    // SALES ORDERS
    // =====================================

    if (
        text.includes("sales order list") ||
        text.includes("sales orders") ||
        text.includes("sales order information") ||
        text.includes("list of sales orders")
    ) {

        return {
            tool:
                tools.sales_orders,

            params:
                []
        };

    }


    // =====================================
    // SALES SUMMARY
    // =====================================

    if (
        text.includes("sales") ||
        text.includes("revenue") ||
        text.includes("income")
    ) {

        return {
            tool:
                tools.sales_summary,

            params:
                []
        };

    }


    // =====================================
    // PRODUCT DETAILS
    // =====================================

    const productCode =
        extractCode(message, "PRD");


    if (productCode) {

        return {
            tool:
                tools.product_details,

            params:
                [productCode]
        };

    }


    // =====================================
    // PRODUCT LIST
    // =====================================

    if (
        text.includes("product list") ||
        text.includes("product information") ||
        text.includes("list of products") ||
        text.includes("products") ||
        text.includes("items")
    ) {

        return {
            tool:
                tools.product_list,

            params:
                []
        };

    }


    // =====================================
    // PRODUCT COUNT
    // =====================================

    if (
        text.includes("how many products") ||
        text.includes("number of products") ||
        text.includes("total products") ||
        text.includes("product count")
    ) {

        return {
            tool:
                tools.product_count,

            params:
                []
        };

    }


    return null;
}


export async function processAssistantMessage(
    message: string
) {

    let businessData: any = null;
    let usedTool: string | undefined;

    const selectedTool =
        selectTool(message);


    if (selectedTool) {

        usedTool =
            selectedTool.tool.name;


        businessData =
            await selectedTool.tool.execute(
                ...Object.values(selectedTool.params ?? {})
            );

    }


    const systemPromt = `
    You are an AI Business Assistant.
    
    Answer professionally.
    
    Only use the business data provided.
    
    If the data is empty, clearly say that no record were found.`;

    const userPrompt = `
    User Question:
    
    ${message}
    
    Business Data:
    
    ${JSON.stringify(businessData, null, 2)}`;

    const answer =
        await askAI(
            systemPromt,
            userPrompt
        );



    if (answer) {

        await saveChatHistory(
            message,
            answer,
            usedTool
        );

    }


    return answer;
}