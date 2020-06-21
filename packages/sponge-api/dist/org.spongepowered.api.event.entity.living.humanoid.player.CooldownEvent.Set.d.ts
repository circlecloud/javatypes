declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                namespace CooldownEvent {
                                    /**
                                     * Handles an {@link ItemType} being given a cooldown for a {@link Player}.
                                     * <p>The cooldowns are all in ticks.</p>
                                     */
                                    // @ts-ignore
                                    interface Set extends org.spongepowered.api.event.entity.living.humanoid.player.CooldownEvent, org.spongepowered.api.event.Cancellable {
                                        /**
                                         * Gets the cooldown the item type had beforehand, if it had one at all.
                                         * @return The cooldown of the item type beforehand
                                         */
                                        // @ts-ignore
                                        getStartingCooldown(): java.util.OptionalInt
                                        /**
                                         * Gets the original new set cooldown at the beginning of the event.
                                         * @return The originally set cooldown
                                         */
                                        // @ts-ignore
                                        getOriginalNewCooldown(): number /*int*/
                                        /**
                                         * Gets the new cooldown the item type has for the player.
                                         * @return The new cooldown of the item type
                                         */
                                        // @ts-ignore
                                        getNewCooldown(): number /*int*/
                                        /**
                                         * Sets the new cooldown for the item type for the player.
                                         * @param ticks The amount of ticks the cooldown should last for
                                         */
                                        // @ts-ignore
                                        setNewCooldown(ticks: number /*int*/): void
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
