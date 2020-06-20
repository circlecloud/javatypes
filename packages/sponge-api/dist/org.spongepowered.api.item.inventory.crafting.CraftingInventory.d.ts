declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace crafting {
                        /**
                         * A CraftingInventory represents the inventory of something that can craft
                         * items.
                         */
                        // @ts-ignore
                        interface CraftingInventory extends org.spongepowered.api.item.inventory.type.OrderedInventory {
                            /**
                             * Gets the crafting matrix of this CraftingInventory.
                             * @return The crafting matrix
                             */
                            // @ts-ignore
                            getCraftingGrid(): org.spongepowered.api.item.inventory.crafting.CraftingGridInventory
                            /**
                             * Gets the result slot of this CraftingInventory.
                             * @return The result slot
                             */
                            // @ts-ignore
                            getResult(): org.spongepowered.api.item.inventory.crafting.CraftingOutput
                            /**
                             * Retrieves the recipe formed by this CraftingInventory, if any.
                             * @param world The world where the item would be crafted in
                             * @return The recipe or {#link Optional#empty()} if no recipe is formed
                             */
                            // @ts-ignore
                            getRecipe(world: org.spongepowered.api.world.World): java.util.Optional<org.spongepowered.api.item.recipe.crafting.CraftingRecipe>
                        }
                    }
                }
            }
        }
    }
}
