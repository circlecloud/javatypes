declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * Commonly used {@link InventoryTransformation}s
                     */
                    // @ts-ignore
                    class InventoryTransformations extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * A transformation that puts the Hotbar of a player inventory before the main inventory.
                         * <p>This transformation is equivalent to calling {@link Inventory#union(Inventory)} on the query
                         * for {@link Hotbar} with the query for {@link MainPlayerInventory} as parameter.</p>
                         */
                        // @ts-ignore
                        readonly PLAYER_MAIN_HOTBAR_FIRST: org.spongepowered.api.item.inventory.InventoryTransformation
                        /**
                         * A transformations that reverses the slot order.
                         */
                        // @ts-ignore
                        readonly REVERSE: org.spongepowered.api.item.inventory.InventoryTransformation
                        /**
                         * A transformation that returns the incoming inventory without changing anything.
                         */
                        // @ts-ignore
                        readonly NO_OP: org.spongepowered.api.item.inventory.InventoryTransformation
                        /**
                         * A transformation that returns an empty inventory.
                         */
                        // @ts-ignore
                        readonly EMPTY: org.spongepowered.api.item.inventory.InventoryTransformation
                    }
                }
            }
        }
    }
}
