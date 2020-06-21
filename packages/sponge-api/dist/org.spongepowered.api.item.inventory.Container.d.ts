declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * A Container is effectively a <em>ViewModel</em> for a particular set of
                     * {@link Inventory} objects used to allow players to interact
                     * with the Inventories, usually via a GUI (the View).
                     */
                    // @ts-ignore
                    interface Container extends org.spongepowered.api.item.inventory.type.Interactable {
                        /**
                         * Gets the current viewers looking at this Inventory.
                         * @return The current viewers of this inventory
                         */
                        // @ts-ignore
                        getViewers(): Array<org.spongepowered.api.entity.living.player.Player>
                        /**
                         * Checks for whether this Inventory currently has viewers.
                         * @return True if viewers are currently looking at this inventory
                         */
                        // @ts-ignore
                        hasViewers(): boolean
                        /**
                         * Shows this Inventory to the given viewer.
                         * @param viewer The viewer to show this inventory to
                         * @throws IllegalArgumentException if a {#link PluginContainer} is not the root of the cause
                         */
                        // @ts-ignore
                        open(viewer: org.spongepowered.api.entity.living.player.Player): void
                        /**
                         * Stops showing this Inventory to the given viewer.
                         * @param viewer The viewer to stop showing this inventory to
                         * @throws IllegalArgumentException if a {#link PluginContainer} is not the root of the cause
                         */
                        // @ts-ignore
                        close(viewer: org.spongepowered.api.entity.living.player.Player): void
                        /**
                         * Returns whether given slot is part of the viewed inventories
                         * but not part of the viewers own inventory.
                         * <p>Examples for viewed inventory slots:</p>
                         * <p>All the slots of the opened chest and not the player grid below.</p>
                         * <p>The slots of the crafting grid in the opened player inventory.</p>
                         * @param slot The slot to check.
                         * @return {#code true} when the slot is part of the viewed inventories.
                         */
                        // @ts-ignore
                        isViewedSlot(slot: org.spongepowered.api.item.inventory.Slot): boolean
                    }
                }
            }
        }
    }
}
