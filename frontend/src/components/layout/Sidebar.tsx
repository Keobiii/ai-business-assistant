import { 
    LayoutDashboard,
    Package,
    Users,
    ShoppingCart,
    Truck,
    Bot,
    Settings,
    Menu
} from "lucide-react";

import { useState } from "react";


const menu = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },
    {
        name: "Inventory",
        icon: Package,
        path: "/inventory"
    },
    {
        name: "Customers",
        icon: Users,
        path: "/customers"
    },
    {
        name: "Sales",
        icon: ShoppingCart,
        path: "/sales"
    },
    {
        name: "Purchase",
        icon: Truck,
        path: "/purchase"
    },
    {
        name: "AI Assistant",
        icon: Bot,
        path: "/assistant"
    },
    {
        name: "Settings",
        icon: Settings,
        path: "/settings"
    }
];


export default function Sidebar(){

    const [collapsed, setCollapsed] = useState(false);

    return (

        <aside
            className={`
                ${collapsed ? "w-20" : "w-64"}
                min-h-screen
                bg-slate-900
                text-white
                p-5
                overflow-hidden
                transition-[width]
                duration-300
                ease-in-out
            `}
        >

            {/* Header */}
            <div className="
                flex
                items-center
                justify-between
                mb-8
                h-8
            ">

                <h1
                    className={`
                        text-xl
                        font-bold
                        whitespace-nowrap
                        overflow-hidden
                        transition-all
                        duration-300
                        ${
                            collapsed
                            ? "opacity-0 w-0"
                            : "opacity-100 w-auto"
                        }
                    `}
                >
                    AI Business
                </h1>


                <button
                    onClick={() => setCollapsed(prev => !prev)}
                    className="
                        p-2
                        rounded-lg
                        hover:bg-slate-700
                        transition
                        shrink-0
                    "
                >
                    <Menu size={22}/>
                </button>


            </div>


            <nav className="space-y-2">

            {
                menu.map((item)=>{

                    const Icon = item.icon;

                    return (

                        <a
                            key={item.name}
                            href={item.path}
                            className="
                                flex
                                items-center
                                gap-3
                                px-3
                                py-3
                                rounded-lg
                                hover:bg-slate-700
                                transition-colors
                            "
                        >

                            <Icon
                                size={22}
                                className="shrink-0"
                            />


                            <span
                                className={`
                                    whitespace-nowrap
                                    overflow-hidden
                                    transition-all
                                    duration-300
                                    ${
                                        collapsed
                                        ? "opacity-0 w-0"
                                        : "opacity-100 w-auto"
                                    }
                                `}
                            >
                                {item.name}
                            </span>


                        </a>

                    )
                })
            }

            </nav>


        </aside>

    )
}