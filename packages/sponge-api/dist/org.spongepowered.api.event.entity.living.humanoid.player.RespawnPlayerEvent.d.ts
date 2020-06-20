declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                /**
                                 * Called when a {@link Player} is cloned during a respawn.
                                 * <p>Either caused by death, or by traveling from the End.</p>
                                 */
                                // @ts-ignore
                                interface RespawnPlayerEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                                    /**
                                     * The original {@link Player} that this new player is a clone of.
                                     * <p>When a player dies, or leaves The End, their {@link Player} is re-created.</p>
                                     * @return The original player
                                     */
                                    // @ts-ignore
                                    getOriginalPlayer(): org.spongepowered.api.entity.living.player.Player
                                    /**
                                     * Gets a copy of the transform that the entity came from.
                                     * @return the previous transform
                                     */
                                    // @ts-ignore
                                    getFromTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                                    /**
                                     * Gets the new transform that the {@link Player} will change to.
                                     * @return the new transform
                                     */
                                    // @ts-ignore
                                    getToTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                                    /**
                                     * Sets the new transform that the entity will change to.
                                     * @param respawnTransform The new transform
                                     */
                                    // @ts-ignore
                                    setToTransform(respawnTransform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>): void
                                    /**
                                     * Gets whether the transform was set by a bed or not.
                                     * @return Whether the transform was set by a bed
                                     */
                                    // @ts-ignore
                                    isBedSpawn(): boolean
                                    /**
                                     * Gets whether this event was fired because the {@link Player} died.
                                     * @return {#code true} if player died, {@code false} if the player switched
                                     *       dimensions
                                     */
                                    // @ts-ignore
                                    isDeath(): boolean
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
