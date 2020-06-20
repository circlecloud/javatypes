declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * An EmptyInventory is an Inventory with exactly zero slots, no children and
                     * a guarantee that all queries will only every return an EmptyInventory.
                     */
                    // @ts-ignore
                    interface EmptyInventory extends org.spongepowered.api.item.inventory.Inventory {
                    }
                }
            }
        }
    }
}
