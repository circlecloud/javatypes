declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        /**
                         * An inventory with some kind of backing storage, for example Tile Entities.
                         */
                        // @ts-ignore
                        interface PersistentInventory extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Mark this inventory as dirty to serve as a flag to the serialisation
                             * mechanism.
                             */
                            // @ts-ignore
                            markDirty(): void
                        }
                    }
                }
            }
        }
    }
}
