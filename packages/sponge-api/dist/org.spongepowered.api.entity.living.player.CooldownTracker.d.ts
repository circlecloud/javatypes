declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        /**
                         * Provides access to the item cooldowns of a {@link Player}.
                         */
                        // @ts-ignore
                        interface CooldownTracker {
                            /**
                             * Checks if the specified {@link ItemType} is currently on cooldown
                             * for the player.
                             * @param type The item type to check is on cooldown
                             * @return Whether or not the specified item type is cooldown
                             */
                            // @ts-ignore
                            hasCooldown(type: org.spongepowered.api.item.ItemType): boolean
                            /**
                             * Gets the cooldown of the specified {@link ItemType} in ticks for the
                             * player, or empty if the the item type is currently not on cooldown.
                             * @param type The item type to get the cooldown for
                             * @return The cooldown remaining for this item type in ticks, if not
                             *      on cooldown
                             */
                            // @ts-ignore
                            getCooldown(type: org.spongepowered.api.item.ItemType): java.util.OptionalInt
                            /**
                             * Sets the cooldown for the specified {@link ItemType} for the
                             * specified amount of ticks.
                             * @param type The item type to set the cooldown for
                             * @param ticks The amount of ticks to set the item type on cooldown for
                             * @return False if setting the cooldown failed, possibly due to the event
                             *      being cancelled
                             */
                            // @ts-ignore
                            setCooldown(type: org.spongepowered.api.item.ItemType, ticks: number /*int*/): boolean
                            /**
                             * Resets the cooldown of the specified {@link ItemType} for the
                             * player.
                             * @param type The item type to reset the cooldown for
                             * @return False if setting the cooldown failed, possibly due to the event
                             *      being cancelled
                             */
                            // @ts-ignore
                            resetCooldown(type: org.spongepowered.api.item.ItemType): boolean
                            /**
                             * Gets the fraction of the specified {@link ItemType}'s cooldown that
                             * is remaining for the player, or empty if the the item type
                             * is currently not on cooldown.
                             * <p>If present, this value will be between 0.0 and 1.0.</p>
                             * @param type The item type to get the cooldown fraction remaining
                             * @return The fraction of cooldown remaining for the specified item type
                             */
                            // @ts-ignore
                            getFractionRemaining(type: org.spongepowered.api.item.ItemType): java.util.OptionalDouble
                        }
                    }
                }
            }
        }
    }
}
