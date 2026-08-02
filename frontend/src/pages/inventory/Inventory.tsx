import { useEffect, useState } from "react";
import {
    createCategory,
    deleteCategory,
    getCategories,
    updateCategory
} from "../../api/inventory.api";

import type { Category } from "../../types/inventory";
import CategoryModal from "./components/CategoryModal";


export default function Inventory() {
    const [categories, setCategories] =
        useState<Category[]>([]);

    const [loading, setLoading] =
        useState(false);

    const [modalOpen, setModalOpen] =
        useState(false);

    const [modalMode, setModalMode] =
        useState<"create" | "edit" | "delete">(
            "create"
        );

    const [selectedCategory, setSelectedCategory] =
        useState<Category | null>(null);

    const [saving, setSaving] =
        useState(false);

    useEffect(() => {

        loadCategories();

    }, []);

    async function loadCategories() {
        setLoading(true);
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error("Error loading categories:", error);
        } finally {
            setLoading(false);
        }
    }

    function openCreateModal() {

        setSelectedCategory(null);

        setModalMode("create");

        setModalOpen(true);
    }


    function openEditModal(
        category: Category
    ) {

        setSelectedCategory(category);

        setModalMode("edit");

        setModalOpen(true);
    }


    function openDeleteModal(
        category: Category
    ) {

        setSelectedCategory(category);

        setModalMode("delete");

        setModalOpen(true);
    }


    function closeModal() {

        if (saving) {
            return;
        }

        setModalOpen(false);

        setSelectedCategory(null);
    }

    async function handleSubmit(
        name: string
    ) {

        try {

            setSaving(true);


            if (modalMode === "create") {

                await createCategory(name);

            } else if (
                modalMode === "edit" &&
                selectedCategory
            ) {

                await updateCategory(
                    selectedCategory.id,
                    name
                );

            }


            await loadCategories();

            closeModal();

        } catch (error) {

            console.error(
                "Category operation failed:",
                error
            );

            alert(
                error instanceof Error
                    ? error.message
                    : "Something went wrong."
            );

        } finally {

            setSaving(false);

        }
    }

    async function handleDelete() {

        if (!selectedCategory) {
            return;
        }


        try {

            setSaving(true);


            await deleteCategory(
                selectedCategory.id
            );


            await loadCategories();

            closeModal();

        } catch (error) {

            console.error(
                "Failed to delete category:",
                error
            );

            alert(
                error instanceof Error
                    ? error.message
                    : "Something went wrong."
            );

        } finally {

            setSaving(false);

        }
    }

    return (
        <div>

            {/* Header */}

            <div
                className="
                mb-6
                flex
                items-center
                justify-between
            "
            >

                <h1
                    className="
                    text-3xl
                    font-bold
                    text-gray-900
                "
                >
                    Product Categories
                </h1>


                <button
                    type="button"
                    onClick={openCreateModal}
                    className="
                    rounded-lg
                    bg-blue-600
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-white
                    hover:bg-blue-700
                "
                >
                    Add Category
                </button>

            </div>


            {/* Category Table */}

            <div
                className="
                overflow-hidden
                rounded-xl
                border
                border-gray-200
                bg-white
            "
            >

                <table
                    className="
                    w-full
                    text-left
                    text-sm
                    text-gray-600
                "
                >

                    <thead
                        className="
                        bg-gray-50
                        text-xs
                        uppercase
                        text-gray-700
                    "
                    >

                        <tr>

                            <th className="px-6 py-4">
                                ID
                            </th>

                            <th className="px-6 py-4">
                                Category Name
                            </th>

                            <th className="px-6 py-4">
                                Created At
                            </th>

                            <th className="px-6 py-4 text-right">
                                Actions
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {/* Loading */}

                        {loading && (

                            <tr>

                                <td
                                    colSpan={4}
                                    className="
                                    px-6
                                    py-8
                                    text-center
                                    text-gray-500
                                "
                                >
                                    Loading categories...
                                </td>

                            </tr>

                        )}


                        {/* Empty */}

                        {!loading &&
                            categories.length === 0 && (

                                <tr>

                                    <td
                                        colSpan={4}
                                        className="
                                        px-6
                                        py-8
                                        text-center
                                        text-gray-500
                                    "
                                    >
                                        No categories found.
                                    </td>

                                </tr>

                            )
                        }


                        {/* Categories */}

                        {!loading &&
                            categories.map((category) => (

                                <tr
                                    key={category.id}
                                    className="
                                    border-t
                                    border-gray-200
                                    hover:bg-gray-50
                                "
                                >

                                    <td className="px-6 py-4">
                                        {category.id}
                                    </td>


                                    <td
                                        className="
                                        px-6
                                        py-4
                                        font-medium
                                        text-gray-900
                                    "
                                    >
                                        {category.name}
                                    </td>


                                    <td className="px-6 py-4">
                                        {new Date(
                                            category.created_at
                                        ).toLocaleDateString()}
                                    </td>


                                    <td
                                        className="
                                        px-6
                                        py-4
                                        text-right
                                    "
                                    >

                                        <div
                                            className="
                                            flex
                                            justify-end
                                            gap-2
                                        "
                                        >

                                            {/* Edit */}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    openEditModal(
                                                        category
                                                    )
                                                }
                                                className="
                                                rounded-lg
                                                border
                                                border-gray-300
                                                px-3
                                                py-2
                                                text-sm
                                                font-medium
                                                text-gray-700
                                                hover:bg-gray-100
                                            "
                                            >
                                                Edit
                                            </button>


                                            {/* Delete */}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    openDeleteModal(
                                                        category
                                                    )
                                                }
                                                className="
                                                rounded-lg
                                                bg-red-600
                                                px-3
                                                py-2
                                                text-sm
                                                font-medium
                                                text-white
                                                hover:bg-red-700
                                            "
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>


            {/* Category Modal */}

            <CategoryModal
                open={modalOpen}
                mode={modalMode}
                category={selectedCategory}
                loading={saving}
                onClose={closeModal}
                onSubmit={handleSubmit}
                onDelete={handleDelete}
            />

        </div>
    );
}