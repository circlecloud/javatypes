declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface UseItemStackEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the original remaining duration of {@link ItemStack} in use.
                             * @return The original remaining duration
                             */
                            // @ts-ignore
                            getOriginalRemainingDuration(): number /*int*/
                            /**
                             * Gets the remaining duration of {@link ItemStack} in use.
                             * @return The remaining duration
                             */
                            // @ts-ignore
                            getRemainingDuration(): number /*int*/
                            /**
                             * Sets the remaining duration of {@link ItemStack} in use.
                             * @param duration The remaining duration to set
                             */
                            // @ts-ignore
                            setRemainingDuration(duration: number /*int*/): void
                            /**
                             * Gets the {@link ItemStack} being consumed.
                             * @return The item being consumed
                             */
                            // @ts-ignore
                            getItemStackInUse(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                        }
                    }
                }
            }
        }
    }
}
