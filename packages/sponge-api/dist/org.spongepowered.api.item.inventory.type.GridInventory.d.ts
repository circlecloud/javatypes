declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        /**
                         * An GridInventory is an {@link Inventory}
                         * which is ordered into a coherent grid format, meaning that its slots can be
                         * referred to by X-Y coordinates as well as single indices.
                         */
                        // @ts-ignore
                        interface GridInventory extends org.spongepowered.api.item.inventory.type.Inventory2D {
                            /**
                             * Gets the number of columns in the inventory.
                             * @return The width of this ItemGrid.
                             */
                            // @ts-ignore
                            getColumns(): int
                            /**
                             * Gets the number of rows in the inventory.
                             * @return The height of this ItemGrid.
                             */
                            // @ts-ignore
                            getRows(): int
                            /**
                             * Returns the dimensions of this GridInventory as a {@link Vector2i}.
                             * @return The dimensions of this GridInventory.
                             */
                            // @ts-ignore
                            getDimensions(): Vector2i
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             * @see Inventory#poll()
                             * @param x x coordinate
                             * @param y y coordinate
                             * @return ItemStack at the specified position or {#link Optional#empty()}
                             *       if the slot is empty or out of bounds
                             */
                            // @ts-ignore
                            poll(x: number /*int*/, y: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets and remove the stack at the supplied position in this Inventory.
                             * @see Inventory#poll()
                             * @param x x coordinate
                             * @param y y coordinate
                             * @param limit item limit
                             * @return ItemStack at the specified position or {#link Optional#empty()}
                             *       if the slot is empty or out of bounds
                             */
                            // @ts-ignore
                            poll(x: number /*int*/, y: number /*int*/, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             * @see Inventory#peek()
                             * @param x x coordinate
                             * @param y y coordinate
                             * @return ItemStack at the specified position or {#link Optional#empty()}
                             *       if the slot is empty or out of bounds
                             */
                            // @ts-ignore
                            peek(x: number /*int*/, y: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack at the supplied position in this
                             * Inventory.
                             * @see Inventory#peek()
                             * @param x x coordinate
                             * @param y y coordinate
                             * @param limit item limit
                             * @return ItemStack at the specified position or {#link Optional#empty()}
                             *       if the slot is empty or out of bounds
                             */
                            // @ts-ignore
                            peek(x: number /*int*/, y: number /*int*/, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Sets the item in the specified slot.
                             * @see Inventory#set(ItemStack)
                             * @param x x coordinate
                             * @param y y coordinate
                             * @param stack Item stack to insert
                             * @return operation result
                             */
                            // @ts-ignore
                            set(x: number /*int*/, y: number /*int*/, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                            /**
                             * Gets the {@link Slot} at the specified position.
                             * @param x x coordinate
                             * @param y y coordinate
                             * @return {#link Slot} at the specified position or
                             *       {@link Optional#empty()} if the coordinates are out of bounds
                             */
                            // @ts-ignore
                            getSlot(x: number /*int*/, y: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.Slot>
                            /**
                             * Gets the row at the specified index.
                             * @param y y coordinate
                             * @return {#link InventoryRow} at the specified position or
                             *       {@link Optional#empty()} if the specified row is out of bounds
                             */
                            // @ts-ignore
                            getRow(y: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.type.InventoryRow>
                            /**
                             * Gets the column at the specified index.
                             * @param x x coordinate
                             * @return {#link InventoryColumn} at the specified position or
                             *       {@link Optional#empty()} if the specified column is out of bounds
                             */
                            // @ts-ignore
                            getColumn(x: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.type.InventoryColumn>
                        }
                    }
                }
            }
        }
    }
}
