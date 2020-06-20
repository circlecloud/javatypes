declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        /**
                         * An Ordered Inventory contains {@link Slot}s in some pre-determined order with
                         * indices between 0 and 1-{@link #capacity}.
                         */
                        // @ts-ignore
                        interface OrderedInventory extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Gets and remove the stack at the supplied index in this Inventory.
                             * @see Inventory#poll()
                             * @param index slot index to query
                             * @return matching stacks, as per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(index: org.spongepowered.api.item.inventory.property.SlotIndex): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets and remove the stack at the supplied index in this Inventory.
                             * @see Inventory#poll()
                             * @param index slot index to query
                             * @param limit item limit
                             * @return matching stacks, as per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(index: org.spongepowered.api.item.inventory.property.SlotIndex, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack at the supplied index in this Inventory.
                             * @see Inventory#peek()
                             * @param index slot index to query
                             * @return matching stacks, as per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(index: org.spongepowered.api.item.inventory.property.SlotIndex): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack at the supplied index in this Inventory.
                             * @see Inventory#peek()
                             * @param index slot index to query
                             * @param limit item limit
                             * @return matching stacks, as per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(index: org.spongepowered.api.item.inventory.property.SlotIndex, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Sets the item in the specified slot.
                             * @see Inventory#set(ItemStack)
                             * @param index Slot index to set
                             * @param stack Stack to insert
                             * @return matching stacks, as per the semantics of {#link Inventory#set}
                             */
                            // @ts-ignore
                            set(index: org.spongepowered.api.item.inventory.property.SlotIndex, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                            /**
                             * Gets the {@link Slot} at the specified position.
                             * @param index Slot index to retrieve
                             * @return slot at the specified position, or {#link Optional#empty()} if
                             *       no matching slot
                             */
                            // @ts-ignore
                            getSlot(index: org.spongepowered.api.item.inventory.property.SlotIndex): java.util.Optional<org.spongepowered.api.item.inventory.Slot>
                        }
                    }
                }
            }
        }
    }
}
