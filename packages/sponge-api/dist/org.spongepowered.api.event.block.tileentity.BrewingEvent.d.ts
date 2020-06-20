declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        /**
                         * Fires during the brewing process where {@link ItemStack}s are brewed into different {@link ItemStack}s
                         * based on an ingredient which is also an {@link ItemStack} within a {@link BrewingStand}.
                         */
                        // @ts-ignore
                        interface BrewingEvent extends org.spongepowered.api.event.block.tileentity.TargetTileEntityEvent {
                            // @ts-ignore
                            getTargetTile(): org.spongepowered.api.block.tileentity.carrier.BrewingStand
                            /**
                             * Gets the {@link ItemStackSnapshot} as the ingredient used.
                             * @return The ingredient
                             */
                            // @ts-ignore
                            getIngredient(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                        }
                    }
                }
            }
        }
    }
}
