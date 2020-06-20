declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface KnowledgeBookMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of recipes in the book.
                     * @return true if the book has recipes
                     */
                    // @ts-ignore
                    hasRecipes(): boolean
                    /**
                     * Gets all the recipes in the book.
                     * @return list of all the recipes in the book
                     */
                    // @ts-ignore
                    getRecipes(): java.util.List<org.bukkit.NamespacedKey>
                    /**
                     * Clears the existing book recipes, and sets the book to use the provided
                     * recipes.
                     * @param recipes A list of recipes to set the book to use
                     */
                    // @ts-ignore
                    setRecipes(recipes: Array<org.bukkit.NamespacedKey>): void
                    /**
                     * Adds new recipe to the end of the book.
                     * @param recipes A list of recipe keys
                     */
                    // @ts-ignore
                    addRecipe(...recipes: org.bukkit.NamespacedKey[]): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.KnowledgeBookMeta
                }
            }
        }
    }
}
