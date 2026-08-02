import { getSalesOrderDetails } from "./tools/sales.tool";

async function test() {

    const result =
        await getSalesOrderDetails("SO-1002");

    console.log(result);

}

test();