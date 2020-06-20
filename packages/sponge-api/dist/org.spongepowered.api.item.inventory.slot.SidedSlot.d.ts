declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace slot {
                        /**
                         * A slot which belongs to a particular side of a "sided" inventory.
                         */
                        // @ts-ignore
                        interface SidedSlot extends org.spongepowered.api.item.inventory.Slot {
                            /**
                             * Gets whether this slot can accept the specified item from the specified
                             * direction.
                             * @param stack Stack to check
                             * @param from Direction to check for insertion from
                             * @return true if this inventory can accept the supplied stack from the
                             *       specified direction
                             */
                            // @ts-ignore
                            canAccept(stack: org.spongepowered.api.item.inventory.ItemStack, from: org.spongepowered.api.util.Direction): boolean
                            /**
                             * Attempts to insert the supplied stack into this inventory from the
                             * specified direction.
                             * @see Inventory#offer(ItemStack)
                             * @param stack Stack to insert
                             * @param from Direction to check for insertion from
                             * @return true if this inventory can accept the supplied stack from the
                             *       specified direction
                             */
                            // @ts-ignore
                            offer(stack: org.spongepowered.api.item.inventory.ItemStack, from: org.spongepowered.api.util.Direction): boolean
                            /**
                             * Gets whether automation can extract the specified item from the specified
                             * direction.
                             * @param stack Stack to check
                             * @param from Direction to check for retrieval from
                             * @return true if automation can retrieve the supplied stack from the
                             *       specified direction
                             */
                            // @ts-ignore
                            canGet(stack: org.spongepowered.api.item.inventory.ItemStack, from: org.spongepowered.api.util.Direction): boolean
                        }
                    }
                }
            }
        }
    }
}
