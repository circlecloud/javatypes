declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        /**
                         * Base interface for inventories with slots obtainable via SlotPos queries.
                         */
                        // @ts-ignore
                        interface Inventory2D extends org.spongepowered.api.item.inventory.type.OrderedInventory {
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             * @see Inventory#poll()
                             * @param pos Slot position to query
                             * @return matching stacks, as per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(pos: org.spongepowered.api.item.inventory.property.SlotPos): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             * @see Inventory#poll()
                             * @param pos Slot position to query
                             * @param limit item limit
                             * @return matching stacks, as per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(pos: org.spongepowered.api.item.inventory.property.SlotPos, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             * @see Inventory#peek()
                             * @param pos Slot position to query
                             * @return matching stacks, as per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(pos: org.spongepowered.api.item.inventory.property.SlotPos): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             * @see Inventory#peek()
                             * @param pos Slot position to query
                             * @param limit item limit
                             * @return matching stacks, as per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(pos: org.spongepowered.api.item.inventory.property.SlotPos, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Sets the item in the specified slot.
                             * @see Inventory#set(ItemStack)
                             * @param pos Slot position to set
                             * @param stack Stack to insert
                             * @return matching stacks, as per the semantics of {#link Inventory#set}
                             */
                            // @ts-ignore
                            set(pos: org.spongepowered.api.item.inventory.property.SlotPos, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                            /**
                             * Gets the {@link Slot} at the specified position.
                             * @param pos Slot position to retrieve
                             * @return slot at the specified position, or {#link Optional#empty()} if
                             *       no matching slot
                             */
                            // @ts-ignore
                            getSlot(pos: org.spongepowered.api.item.inventory.property.SlotPos): java.util.Optional<org.spongepowered.api.item.inventory.Slot>
                        }
                    }
                }
            }
        }
    }
}
