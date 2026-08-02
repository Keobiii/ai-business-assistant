import { getProductDetails } from "./tools/product.tool";

async function test() {

    const result =
        await getProductDetails("PRD-004");

    console.log(result);

}

test();