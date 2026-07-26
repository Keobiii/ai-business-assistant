import { getLowStockProducts } from "../tools/inventory.tool";
import { tools } from "../tools/tool.registry";
import { askAI } from "./ai.service";


function selectTool(message: string) {

    const text = message.toLowerCase();


    if (
        text.includes("stock") ||
        text.includes("inventory") ||
        text.includes("restock") ||
        text.includes("reorder")
    ) {

        return tools.inventory_low_stock;

    }


    if (
        text.includes("business") ||
        text.includes("summary") ||
        text.includes("overview") ||
        text.includes("performance")
    ) {

        return tools.dashboard_summary;

    }


    if (
        text.includes("customer") ||
        text.includes("client")
    ) {

        return tools.customer_count;

    }


    if (
        text.includes("top customer") ||
        text.includes("best customer") ||
        text.includes("highest customer")
    ) {

        return tools.customer_top;

    }


    if (
        text.includes("sales") ||
        text.includes("revenue") ||
        text.includes("income")
    ) {

        return tools.sales_summary;

    }


    if (
        text.includes("product") ||
        text.includes("items")
    ) {

        return tools.product_count;

    }


    return null;

}

export async function processAssistantMessage(
    message: string
) {

    let businessData: any = null;

    const selectedTool =
        selectTool(message);

    if (selectedTool) {
        businessData =
            await selectedTool.execute();
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

    return await askAI(
        systemPromt,
        userPrompt
    )
}