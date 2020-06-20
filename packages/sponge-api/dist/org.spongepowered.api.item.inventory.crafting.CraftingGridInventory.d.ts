declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace crafting {
                        /**
                         * A CraftingGridInventory represents the inventory of something that can craft
                         * items. This is excluding the Result slot.
                         */
                        // @ts-ignore
                        interface CraftingGridInventory extends org.spongepowered.api.item.inventory.type.GridInventory {
                            /**
                             * Retrieves the recipe formed by this CraftingGridInventory, if any.
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
