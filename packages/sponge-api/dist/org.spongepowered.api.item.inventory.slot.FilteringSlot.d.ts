declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace slot {
                        /**
                         * An inventory slot which can only accept certain types of item.
                         */
                        // @ts-ignore
                        interface FilteringSlot extends org.spongepowered.api.item.inventory.Slot {
                            /**
                             * Check whether the supplied item can be inserted into this slot. Returning
                             * false from this method implies that {@link #offer} <b>would always return
                             * false</b> for this item.
                             * @param stack ItemStack to check
                             * @return true if the stack is valid for this slot
                             */
                            // @ts-ignore
                            isValidItem(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                            /**
                             * Check whether the supplied item can be inserted into this slot. Returning
                             * false from this method implies that {@link #offer} <b>would always return
                             * false</b> for items of this type.
                             * @param type ItemType to check
                             * @return true if the item type is valid for this slot
                             */
                            // @ts-ignore
                            isValidItem(type: org.spongepowered.api.item.ItemType): boolean
                        }
                    }
                }
            }
        }
    }
}
