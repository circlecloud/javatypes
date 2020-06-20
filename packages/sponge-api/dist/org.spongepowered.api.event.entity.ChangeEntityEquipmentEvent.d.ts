declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * Called when an entity changes an equipped item. This can occur whenever
                     * a {@link Slot} belonging to an {@link Inventory} of an {@link Entity}
                     * is filled with an {@link ItemStack}, emptied of an {@link ItemStack},
                     * or swapped with an {@link ItemStack}. In the event that a change to the
                     * {@link ItemStack}, the use of the {@link Transaction} is recommended.
                     */
                    // @ts-ignore
                    interface ChangeEntityEquipmentEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.item.inventory.TargetInventoryEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the previously equipped {@link ItemStack} as an
                         * {@link ItemStackSnapshot}.
                         * <p>The previously equipped item may have been empty.</p>
                         * @return The original itemstack, if available
                         * @deprecated Use {#link #getTransaction()} instead
                         */
                        // @ts-ignore
                        getOriginalItemStack(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        /**
                         * Gets the new {@link ItemStack} that is being equipped in the relative
                         * armor slot.
                         * <p>The itemstack may not exist or the slot is being emptied.</p>
                         * @return The new item stack, if available
                         * @deprecated Use {#link #getTransaction()} instead
                         */
                        // @ts-ignore
                        getItemStack(): java.util.Optional<org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                        /**
                         * Gets the {@link Transaction} of {@link ItemStackSnapshot}s for this event.
                         * @return The transaction of the item
                         */
                        // @ts-ignore
                        getTransaction(): org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        // @ts-ignore
                        getTargetInventory(): org.spongepowered.api.item.inventory.Slot
                    }
                }
            }
        }
    }
}
