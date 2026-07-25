const customers = [
    {
        name: "ABC Corporation",
        orders: 52,
        amount: "$45,200"
    },
    {
        name: "XYZ Enterprise",
        orders: 28,
        amount: "$18,900"
    }
];


const inventory = [
    {
        product: "Laptop Pro",
        stock: 15,
        status: "Low Stock"
    },
    {
        product: "Wireless Mouse",
        stock: 240,
        status: "Good"
    }
];


export default function Dashboard() {

    return (

        <div>

            <h1 className="
                text-3xl
                font-bold
                mb-6
                ">
                Dashboard
            </h1>


            <div className="
                grid
                grid-cols-4
                gap-5
                mb-8
                ">


                {
                    [
                        ["Customers", "1,248"],
                        ["Products", "3,560"],
                        ["Inventory Value", "$248,540"],
                        ["Today's Sales", "$12,430"]
                    ]
                        .map(card => (

                            <div
                                className="
bg-white
rounded-xl
p-5
shadow
"
                            >

                                <p className="text-gray-500">
                                    {card[0]}
                                </p>

                                <h2 className="text-2xl font-bold">
                                    {card[1]}
                                </h2>


                            </div>

                        ))
                }


            </div>



            <div className="
grid
grid-cols-2
gap-6
">


                <div className="
bg-white
rounded-xl
p-5
">

                    <h2 className="
font-bold
mb-4
">
                        Customers
                    </h2>


                    <table className="w-full">

                        <tbody>

                            {
                                customers.map(c => (

                                    <tr>

                                        <td>{c.name}</td>
                                        <td>{c.orders}</td>
                                        <td>{c.amount}</td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>


                </div>




                <div className="
bg-white
rounded-xl
p-5
">

                    <h2 className="
font-bold
mb-4
">
                        Inventory
                    </h2>


                    <table className="w-full">

                        <tbody>

                            {
                                inventory.map(i => (

                                    <tr>

                                        <td>{i.product}</td>
                                        <td>{i.stock}</td>
                                        <td>{i.status}</td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>


                </div>


            </div>



        </div>

    )

}