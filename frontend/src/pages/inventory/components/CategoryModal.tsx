import { useEffect, useState } from "react";
import type { Category } from "../../../types/inventory";

interface CategoryModalProps {
    open: boolean;
    mode: "create" | "edit" | "delete";
    category?: Category | null;
    loading?: boolean;

    onClose: () => void;
    onSubmit: (name: string) => void;
    onDelete: () => void;
}

export default function CategoryModal({
    open,
    mode,
    category,
    loading = false,
    onClose,
    onSubmit,
    onDelete
}: CategoryModalProps) {

    const [name, setName] =
        useState("");


    useEffect(() => {

        if (mode === "edit" && category) {

            setName(category.name);

        } else {

            setName("");

        }

    }, [mode, category, open]);


    if (!open) {
        return null;
    }


    const isDelete =
        mode === "delete";


    const title =
        mode === "create"
            ? "Add Category"
            : mode === "edit"
                ? "Edit Category"
                : "Delete Category";


    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/50
                px-4
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    rounded-xl
                    bg-white
                    shadow-xl
                "
            >

                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        px-6
                        py-4
                    "
                >

                    <h2 className="text-lg font-semibold text-gray-900">
                        {title}
                    </h2>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            text-2xl
                            leading-none
                            text-gray-400
                            hover:text-gray-600
                        "
                    >
                        ×
                    </button>

                </div>


                {/* Content */}

                <div className="px-6 py-5">

                    {isDelete ? (

                        <p className="text-sm text-gray-600">

                            Are you sure you want to delete{" "}

                            <span className="font-semibold text-gray-900">
                                {category?.name}
                            </span>

                            ?

                        </p>

                    ) : (

                        <div>

                            <label
                                htmlFor="categoryName"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
                                "
                            >
                                Category Name
                            </label>


                            <input
                                id="categoryName"
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                placeholder="Enter category name"
                                disabled={loading}
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    px-3
                                    py-2
                                    text-sm
                                    outline-none
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-500
                                "
                            />

                        </div>

                    )}

                </div>


                {/* Footer */}

                <div
                    className="
                        flex
                        justify-end
                        gap-2
                        border-t
                        border-gray-200
                        px-6
                        py-4
                    "
                >

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="
                            rounded-lg
                            border
                            border-gray-300
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-gray-700
                            hover:bg-gray-100
                        "
                    >
                        Cancel
                    </button>


                    {isDelete ? (

                        <button
                            type="button"
                            onClick={onDelete}
                            disabled={loading}
                            className="
                                rounded-lg
                                bg-red-600
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-white
                                hover:bg-red-700
                                disabled:opacity-50
                            "
                        >
                            {loading
                                ? "Deleting..."
                                : "Delete"}
                        </button>

                    ) : (

                        <button
                            type="button"
                            disabled={
                                loading ||
                                !name.trim()
                            }
                            onClick={() =>
                                onSubmit(name.trim())
                            }
                            className="
                                rounded-lg
                                bg-blue-600
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-white
                                hover:bg-blue-700
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            {loading
                                ? "Saving..."
                                : mode === "create"
                                    ? "Create"
                                    : "Update"}
                        </button>

                    )}

                </div>

            </div>

        </div>
    );
}