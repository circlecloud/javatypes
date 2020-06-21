declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace entity {
                        /**
                         * A human's hotbar.
                         */
                        // @ts-ignore
                        interface Hotbar extends org.spongepowered.api.item.inventory.type.InventoryRow {
                            /**
                             * Gets the index of the slot that is currently selected by the Humanoid.
                             * @return The slot being currently held as an integer from 0-8, inclusive
                             */
                            // @ts-ignore
                            getSelectedSlotIndex(): number /*int*/
                            /**
                             * Sets the slot selected by the Humanoid.
                             * @param index The slot to hold as an integer from 0-8, inclusive
                             */
                            // @ts-ignore
                            setSelectedSlotIndex(index: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
