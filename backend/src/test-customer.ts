import { getCustomerDetails } from "./tools/customer.tool";

async function test() {

    const result =
        await getCustomerDetails("CUST-003");

    console.log(result);

}

test();