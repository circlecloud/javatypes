declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * A slot is an {@link Inventory} with only a single stack.
                     */
                    // @ts-ignore
                    interface Slot extends org.spongepowered.api.item.inventory.Inventory {
                        /**
                         * Gets the size of the stack in this slot. Essentially the same as calling
                         * slot.peek().getQuantity(); but faster because it avoids the Optional
                         * boxing.
                         * @return The stack size.
                         * @deprecated Use {#link Inventory#totalItems()} instead.
                         */
                        // @ts-ignore
                        getStackSize(): int
                        /**
                         * Transforms this Slot into given Type.
                         * <dl>
                         * <dt>Example</dt>
                         * <dd>In a InventoryEvent with a Container to get the actual inventory
                         * from Slot, you may call this with {@link Type#INVENTORY}.</dd>
                         * </dl>
                         * @param type the type to transform into
                         * @return the transformed Slot or itself if already the correct type
                         */
                        // @ts-ignore
                        transform(type: org.spongepowered.api.item.inventory.Slot.Type): org.spongepowered.api.item.inventory.Slot
                        /**
                         * Transforms this Slot into the default Type.
                         * @return the transformed Slot or itself if already the default type
                         */
                        // @ts-ignore
                        transform(): org.spongepowered.api.item.inventory.Slot
                    }
                }
            }
        }
    }
}
